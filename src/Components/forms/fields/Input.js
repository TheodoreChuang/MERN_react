import React from "react";
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
  
  function Inputs(props) {
    const { classes, meta, value, input, ...other } = props;
    console.log(props);
    return (
      <div className={classes.container}>
        <Input
          {...input}
          {...other}
          meta={meta}
          className={classes.input}
        />
        <div> {meta.touched && meta.error} </div>
      </div>
    );
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
