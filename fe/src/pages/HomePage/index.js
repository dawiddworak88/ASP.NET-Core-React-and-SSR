import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import HomePage from './HomePage';

hydrateRoot(document.getElementById("root"), <HomePage {...window.data} />)