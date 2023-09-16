import classNames from "classnames";
import DropzoneAlias from "react-dropzone";

function Dropzone({ multiple, className, message = "Drop files here to upload", ...props }) {
  const classes = classNames(
    "dropzone",
    multiple && "dropzone-multiple",
    className
  );

  return (
    <DropzoneAlias multiple={multiple} {...props}>
      {({ getRootProps, getInputProps }) => (
        <div className={classes} {...getRootProps()}>
          <input {...getInputProps()} />
          <div className="dz-message">{message}</div>
        </div>
      )}
    </DropzoneAlias>
  );
}

export default Dropzone;
