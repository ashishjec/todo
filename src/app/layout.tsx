"use client";

import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import './globals.css';  // Update this path

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className="bg-gray-100 text-gray-900">
          {children}
        </body>
      </html>
    </Provider>
  );
};

export default Layout;
