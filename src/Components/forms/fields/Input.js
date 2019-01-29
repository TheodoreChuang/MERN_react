import React, { Component } from "react";
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    input: {
      margin: theme.spacing.unit,
    },
  });
  
  class Inputs extends Component {
    state = { current: "" }
    
    onChange = (event) => {
      const { input: { onChange }, type } = this.props;
      let value = event.target.value;

      if (type === "file") {
        this.setState({ current: value });
        value = event.target.files[0];
      }
    
      onChange(value);
    }

    render() {
      const { classes, meta, input, ...other } = this.props;
      const { value, onChange, ...otherInput } = input;
      const { current } = this.state;

      return (
        <div className={classes.container}>
          <Input
            {...other}
            {...otherInput}
            meta={meta}
            className={classes.input}
            value={other.type === "file" ? current : value}
            onChange={this.onChange}
          />
          <div> {meta.touched && meta.error} </div>
        </div>
      );
    }
  }
  
  Inputs.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Inputs);

  //old code
  // const Input = ({meta, input, type, name, placeholder, value, creator_id, required }) => {
    
//     return (
//         <span>
            
//             <input {...input} type={type} name={name} placeholder={placeholder} value={value} creator_id={creator_id} required = {required} autoComplete="off"  />

//             <span> {meta.touched && meta.error} </span>
//         </span>
//     );
// }

// export default Input;
