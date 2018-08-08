import React from "react";
import { withStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const styles = {
    root: {
        color: red[600],
        "&$checked": {
            color: green[500]
        }
    },
    checked: {},
};

class CheckboxLabels extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            checked: false,
        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.checked,
        });
    };

    render() {

        const { classes } = this.props;
        return (
            <FormControlLabel
                control={
                    <Checkbox
                        checked={this.state.checked}
                        onChange={this.handleChange("checked")}
                        value="checked"
                        classes={{
                            root: classes.root,
                            checked: classes.checked
                        }}
                    />
                }
            />
        );
    }
}

export default withStyles(styles)(CheckboxLabels);
