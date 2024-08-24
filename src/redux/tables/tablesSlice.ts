import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BRAND } from '@/types/brand';
import { Product } from '@/types/product';
import { Package } from '@/types/package';
import { User } from "@/types/user";

import { initialUserData } from '@/data/tables/users';
import { initialBrandData } from '@/data/tables/brands';
import { initialProductData } from '@/data/tables/products';
import { initialPackageData } from '@/data/tables/packages';


interface AppState {
  brands: BRAND[];
  products: Product[];
  packages: Package[];
  users: User[];
}

const initialState: AppState = {
  brands: initialBrandData,
  products: initialProductData,
  packages: initialPackageData,
  users: initialUserData,
};

const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {

    // brand reducers
    setBrands(state, action: PayloadAction<BRAND[]>) {
      state.brands = action.payload;
    },
    addBrand(state, action: PayloadAction<BRAND>) {
      state.brands.push(action.payload);
    },
    updateBrand(state, action: PayloadAction<BRAND>) {
      const index = state.brands.findIndex(brand => brand.name === action.payload.name);
      if (index !== -1) {
        state.brands[index] = action.payload;
      }
    },
    deleteBrand(state, action: PayloadAction<string>) {
      state.brands = state.brands.filter(brand => brand.name !== action.payload);
    },

    //product reducers
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.products.push(action.payload);
    },
    updateProduct(state, action: PayloadAction<Product>) {
      const index = state.products.findIndex(product => product.name === action.payload.name);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    deleteProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter(product => product.name !== action.payload);
    },

    //pakage reducers
    setPackages(state, action: PayloadAction<Package[]>) {
      state.packages = action.payload;
    },
    addPackage(state, action: PayloadAction<Package>) {
      state.packages.push(action.payload);
    },
    updatePackage(state, action: PayloadAction<Package>) {
      const index = state.packages.findIndex(pkg => pkg.name === action.payload.name);
      if (index !== -1) {
        state.packages[index] = action.payload;
      }
    },
    deletePackage(state, action: PayloadAction<string>) {
      state.packages = state.packages.filter(pkg => pkg.name !== action.payload);
    },

    //user reducers
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action: PayloadAction<{ index: number; user: User }>) => {
      state.users[action.payload.index] = action.payload.user;
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users.splice(action.payload, 1);
    },


  },
});

export const {
  setBrands,
  addBrand,
  updateBrand,
  deleteBrand,

  setProducts,
  addProduct,
  updateProduct,
  deleteProduct,

  setPackages,
  addPackage,
  updatePackage,
  deletePackage,

  addUser,
  updateUser,
  deleteUser,
  
} = tablesSlice.actions;

export default tablesSlice.reducer;