const logDefault = {
    invalidId: "Invalid id.",
    invalidName: "Invalid name.",
    invalidEmail: "Invalid email.",
    invalidPassword: "invalid password.",
    invalidTitle: "Invalid title.",
    invalidDescription: "Invalid description.",
    invalidPrice: "Invalid price.",
    nameAlreadyExist: "Email already exist.",
    titleAlreadyExist: "Email already exist.",
    emailAlreadyExist: "Email already exist.",
    somethingGoesWrong: "Something goes wrong."
}

const logUser = {
    userNotFound: "User not found.",
    requiredLogged: "Need to be logged in",
    invalidCredentials: "Name or password are incorrect.",
    tokenNotProvide: "No token provide.",
    tokenUnauthentic: "Unauthentic token",
    AccessDenied: "Logged in user does not have access to this content"
}

const logRole = {
    roleNotFound: "Role not found.",
}

const logPermission = {
    permissionNotFound: "Permission not found.",
    permissionRequired: "Permission to access this route required"
}

const logRolePermission = {
    relationshipNotFound: "Relationship not found.",
}

module.exports = {logDefault, logUser, logRole, logPermission, logRolePermission}