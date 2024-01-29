import React, { FunctionComponent, ReactNode } from "react";
import './Modal.css';
type ModalProps = {
  open: boolean;
  onClose: () => void;
  className?: string;
  header?: ReactNode;
  leading?: ReactNode;
  size?: "small" | "medium" | "large";
  trailing?: ReactNode;
  title?: string;
  children?: ReactNode; 
};

const Modal: FunctionComponent<ModalProps> = ({
  open,
  onClose,
  className,
  header,
  leading,
  size = "medium",
  trailing,
  title,
  children,
}) => {
  if (!open) {
    return null;
  }

  return (
    <div className={`modal ${className}`}>
      <div className={`modal-dialog ${size}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          {header && <div className="modal-header-content">{header}</div>}
          <div className="modal-body">
            {leading && <div className="modal-leading">{leading}</div>}
            {children}
            {trailing && <div className="modal-trailing">{trailing}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
