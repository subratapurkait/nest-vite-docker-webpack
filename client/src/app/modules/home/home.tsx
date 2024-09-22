import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/4 p-4">
        <span className="hipster rounded-full" />
      </div>
      <div className="w-full md:w-3/4">
        <h1 className="text-4xl font-bold">
          <Translate contentKey="home.title">Welcome, Java Hipster!</Translate>
        </h1>
        <p className="text-xl">
          <Translate contentKey="home.subtitle">This is your homepage</Translate>
        </p>
        {account?.login ? (
          <div>
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <Translate contentKey="home.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </div>
          </div>
        ) : (
          <div>
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
              <Translate contentKey="global.messages.info.authenticated.prefix">If you want to </Translate>
              <Link to="/login" className="text-blue-500 underline">
                <Translate contentKey="global.messages.info.authenticated.link"> sign in</Translate>
              </Link>
              <Translate contentKey="global.messages.info.authenticated.suffix">
                , you can try the default accounts:
                <br />- Administrator (login=&quot;admin&quot; and password=&quot;admin&quot;)
                <br />- User (login=&quot;user&quot; and password=&quot;user&quot;).
              </Translate>
            </div>
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mt-4" role="alert">
              <Translate contentKey="global.messages.info.register.noaccount">You do not have an account yet?</Translate>&nbsp;
              <Link to="/account/register" className="text-blue-500 underline">
                <Translate contentKey="global.messages.info.register.link">Register a new account</Translate>
              </Link>
            </div>
          </div>
        )}
        <p>
          <Translate contentKey="home.question">If you have any question on JHipster:</Translate>
        </p>
        <ul className="list-disc list-inside">
          <li>
            <a href="https://www.jhipster.tech/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              <Translate contentKey="home.link.homepage">JHipster homepage</Translate>
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/tags/jhipster/info"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              <Translate contentKey="home.link.stackoverflow">JHipster on Stack Overflow</Translate>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jhipster/generator-jhipster/issues?state=open"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              <Translate contentKey="home.link.bugtracker">JHipster bug tracker</Translate>
            </a>
          </li>
          <li>
            <a
              href="https://gitter.im/jhipster/generator-jhipster"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              <Translate contentKey="home.link.chat">JHipster public chat room</Translate>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/jhipster" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              <Translate contentKey="home.link.follow">follow @jhipster on Twitter</Translate>
            </a>
          </li>
        </ul>
        <p>
          <Translate contentKey="home.like">If you like JHipster, do not forget to give us a star on</Translate>{' '}
          <a
            href="https://github.com/jhipster/generator-jhipster"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            GitHub
          </a>
          !
        </p>
      </div>
    </div>
  );
};

export default Home;
