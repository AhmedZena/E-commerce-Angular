export default interface IUser {
  id?: number;
  name?: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  street?: string;
  postalCode?: number;
  phone?: string;
  address?: {
    street: string;
    city: string;
    zipcode: string;
  };
  website?: string;
}
