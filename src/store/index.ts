
import { createStore } from '@/store/jcstore';

const initStore = {
    language: process.env.LANGUAGE,
    username: 'unknown'
};

export type Store = typeof initStore;

export default createStore(initStore);