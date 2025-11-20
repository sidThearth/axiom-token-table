import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TableState {
    sortColumn: string | null;
    sortDirection: 'asc' | 'desc' | null;
    filter: string;
    activeTab: 'new' | 'final' | 'migrated';
}

const initialState: TableState = {
    sortColumn: null,
    sortDirection: null,
    filter: '',
    activeTab: 'new',
}

const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setSort: (state, action: PayloadAction<{ column: string; direction: 'asc' | 'desc' | null }>) => {
            state.sortColumn = action.payload.column;
            state.sortDirection = action.payload.direction;
        },
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
        setActiveTab: (state, action: PayloadAction<'new' | 'final' | 'migrated'>) => {
            state.activeTab = action.payload;
        },
    },
})

export const { setSort, setFilter, setActiveTab } = tableSlice.actions;

export const store = configureStore({
    reducer: {
        table: tableSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
