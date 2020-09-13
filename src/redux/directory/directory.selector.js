import {createSelector} from 'reselect';

const selectDirectory = state =>state.directory;

export const directorySelect = createSelector(
    [selectDirectory],
    directory => directory.sections

)