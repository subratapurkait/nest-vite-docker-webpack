import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Badge } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT } from 'app/config/constants';
import { languages } from 'app/config/translation';
import { getUser } from './user-management.reducer';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const UserManagementDetail = () => {
  const dispatch = useAppDispatch();

  const { login } = useParams<'login'>();

  useEffect(() => {
    dispatch(getUser(login));
  }, []);

  const user = useAppSelector(state => state.userManagement.user);

  return (
    <div>
      <h2 className="text-2xl font-bold">
        <Translate contentKey="userManagement.detail.title">User</Translate> [<strong>{user.login}</strong>]
      </h2>
      <div className="md:flex">
        <dl className="space-y-4">
          <dt className="font-semibold">
            <Translate contentKey="userManagement.login">Login</Translate>
          </dt>
          <dd className="flex items-center space-x-2">
            <span>{user.login}</span>
            {user.activated ? (
              <span className="bg-green-500 text-white px-2 py-1 rounded">
                <Translate contentKey="userManagement.activated">Activated</Translate>
              </span>
            ) : (
              <span className="bg-red-500 text-white px-2 py-1 rounded">
                <Translate contentKey="userManagement.deactivated">Deactivated</Translate>
              </span>
            )}
          </dd>
          <dt className="font-semibold">
            <Translate contentKey="userManagement.firstName">First Name</Translate>
          </dt>
          <dd>{user.firstName}</dd>
          <dt className="font-semibold">
            <Translate contentKey="userManagement.lastName">Last Name</Translate>
          </dt>
          <dd>{user.lastName}</dd>
          <dt className="font-semibold">
            <Translate contentKey="userManagement.email">Email</Translate>
          </dt>
          <dd>{user.email}</dd>
          <dt className="font-semibold">
            <Translate contentKey="userManagement.langKey">Lang Key</Translate>
          </dt>
          <dd>{user.langKey ? languages[user.langKey].name : undefined}</dd>
          <dt className="font-semibold">
            <Translate contentKey="userManagement.createdBy">Created By</Translate>
          </dt>
          <dd>{user.createdBy}</dd>
          <dt className="font-semibold">
            <Translate contentKey="userManagement.createdDate">Created Date</Translate>
          </dt>
          <dd>{user.createdDate ? <TextFormat value={user.createdDate} type="date" format={APP_DATE_FORMAT} blankOnInvalid /> : null}</dd>
          <dt className="font-semibold">
            <Translate contentKey="userManagement.lastModifiedBy">Last Modified By</Translate>
          </dt>
          <dd>{user.lastModifiedBy}</dd>
          <dt className="font-semibold">
            <Translate contentKey="userManagement.lastModifiedDate">Last Modified Date</Translate>
          </dt>
          <dd>
            {user.lastModifiedDate ? (
              <TextFormat value={user.lastModifiedDate} type="date" format={APP_DATE_FORMAT} blankOnInvalid />
            ) : null}
          </dd>
          <dt className="font-semibold">
            <Translate contentKey="userManagement.profiles">Profiles</Translate>
          </dt>
          <dd>
            <ul className="list-none space-y-2">
              {user.authorities
                ? user.authorities.map((authority, i) => (
                    <li key={`user-auth-${i}`}>
                      <span className="bg-blue-500 text-white px-2 py-1 rounded">{authority}</span>
                    </li>
                  ))
                : null}
            </ul>
          </dd>
        </dl>
      </div>
      <Button tag={Link} to="/admin/user-management" replace className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        <FontAwesomeIcon icon="arrow-left" />{' '}
        <span className="hidden md:inline">
          <Translate contentKey="entity.action.back">Back</Translate>
        </span>
      </Button>
    </div>
  );
};

export default UserManagementDetail;
