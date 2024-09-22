import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getUser, deleteUser } from './user-management.reducer';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const UserManagementDeleteDialog = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { login } = useParams<'login'>();

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    dispatch(getUser(login));
  }, [dispatch, login]);

  const handleClose = event => {
    event.stopPropagation();
    setIsOpen(false);
    navigate('/admin/user-management');
  };

  const user = useAppSelector(state => state.userManagement.user);

  const confirmDelete = event => {
    dispatch(deleteUser(user.login));
    handleClose(event);
  };

  return (
    <div className={'fixed inset-0 z-50 flex items-center justify-center ' + (isOpen ? 'block' : 'hidden')}>
      <div className="bg-white rounded-lg shadow-lg w-1/3">
        <div className="flex justify-between items-center p-4 border-b">
          <h5 className="text-lg font-semibold">
            <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
          </h5>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <div className="p-4">
          <Translate contentKey="userManagement.delete.question" interpolate={{ login: user.login }}>
            Are you sure you want to delete this User?
          </Translate>
        </div>
        <div className="flex justify-end p-4 border-t">
          <button onClick={handleClose} className="bg-gray-500 text-white px-4 py-2 rounded mr-2 hover:bg-gray-600">
            <FontAwesomeIcon icon="ban" />
            &nbsp;
            <Translate contentKey="entity.action.cancel">Cancel</Translate>
          </button>
          <button onClick={confirmDelete} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            <FontAwesomeIcon icon="trash" />
            &nbsp;
            <Translate contentKey="entity.action.delete">Delete</Translate>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagementDeleteDialog;