const userSerializer = ({ user, userList }) => {
  if (user) {
    return {
      name: user.name,
      email: user.email,
      address: user.address,
      cart: user.cart
    };
  }

  return userList.map(usr => ({
    name: usr.name,
    email: usr.email,
    address: usr.address,
    cart: usr.cart
  }));
};

export default userSerializer;
