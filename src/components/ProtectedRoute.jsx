import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext.jsx';

export default function ProtectedRoute({ children, roles }) {
    const { user, loading } = useAuth();
    if (loading) return <div className="text-slate-300 p-8">Loading...</div>;
    if (!user) return <Navigate to="/login" replace />;
    if (roles && roles.length && !roles.includes(user.role)) return <Navigate to="/" replace />;
    return children;
}


