type ValidationUserPermissionsParams = {
  user: {
    permissions: string[];
    roles: string[];
  };
  permissions?: string[];
  roles?: string[];
}

export function validateUserPermissions({ user, permissions, roles}: ValidationUserPermissionsParams) {
  if (permissions?.length > 0) {
    const hasAllPermissions = permissions.every(permissions => {
      return user.permissions.includes(permissions);
    });

    if (!hasAllPermissions) {
      return false;
    }
  }

  if (roles?.length > 0) {
    const hasAllRoles= roles.some(role => {
      return user.roles.includes(role);
    });

    if (!hasAllRoles) {
      return false;
    }
  }

  return true;
}