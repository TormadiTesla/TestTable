import React from 'react';
import type { SetStateAction } from 'react';
import "./ModalWindow.css"

type ModalWindowProps = {
  isOpen: boolean;
  onClose: (value: SetStateAction<boolean>) => void;
  children: React.ReactNode;
};

function ModalWindow({ isOpen, children, onClose }: ModalWindowProps): JSX.Element | null {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          {children}
          <button onClick={() => onClose(false)}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;