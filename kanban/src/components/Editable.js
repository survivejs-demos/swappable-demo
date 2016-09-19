import React from 'react';
import classnames from 'classnames';

const Editable = ({editing, value, onEdit, className, ...props}) => {
  if(editing) {
    return <Edit
      className={className}
      value={value}
      onEdit={onEdit}
      {...props} />;
  }

  return (
    <div className={classnames('value', className)} {...props}>
      {value}
    </div>
  );
};

const Edit = ({className, value, onEdit = () => {}, ...props}) => {
  const finishEdit = e => onEdit(e.target.value);
  const checkEnter = e => e.key === 'Enter' && finishEdit(e);

  return <input
    type="text"
    className={classnames('edit', className)}
    autoFocus={true}
    defaultValue={value}
    onBlur={finishEdit}
    onKeyPress={checkEnter}
    {...props} />;
}

export default Editable;
