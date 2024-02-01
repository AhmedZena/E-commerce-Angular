/*
a. Class Store, has properties:
i) Name
ii) Array of branches
iii) Logo
*/

export class Store {
  constructor(
    public storeName: string,
    public branches: string[],
    public logo: string
  ) {}
}
