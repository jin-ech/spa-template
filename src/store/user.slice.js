/**
 * @file 用户store
 * @author jinech
 */

import {createSlice} from '@reduxjs/toolkit';
// import request, {post} from '@request/service';

const initialState = {
    detail: {}
};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        updateUserDetail: (state, actions) => {
            const {payload} = actions;
            state.detail = payload;
        }
    }
});

export const userDetail = state => state.userSlice;

export const {updateUserDetail} = userSlice.actions;

