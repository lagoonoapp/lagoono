import React, { lazy, useState, useEffect, useRef } from 'react';
import { useParams, Navigate, generatePath } from 'react-router-dom';

const RedirectComponent = ({ to }) => {
    const params = useParams(); // Get parameters from the current URL
    const redirectPath = generatePath(to, params); // Generate the new path with parameters
    return <Navigate to={redirectPath} replace />; // Perform the redirection
};

export default RedirectComponent;