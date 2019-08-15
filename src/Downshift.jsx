import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Downshift from 'downshift';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';




function renderInput(inputProps) {
    const { InputProps, classes, ref, ...other } = inputProps;

    return (
        <TextField
            InputProps={{
                inputRef: ref,
                classes: {
                    root: classes.inputRoot,
                    input: classes.inputInput,
                },
                ...InputProps,
            }}
            {...other}
        />  
    );
}

function renderSuggestion(suggestionProps) {
    const { suggestion, index, itemProps, highlightedIndex, selectedItem } = suggestionProps;
    const isHighlighted = highlightedIndex === index;
    const isSelected = (selectedItem || '').indexOf(suggestion) > -1;

    return (
        <MenuItem
            {...itemProps}
            key={suggestion}
            selected={isHighlighted}
            component="div"
            style={{
                fontWeight: isSelected ? 500 : 400,
            }}
        >
            {suggestion}
        </MenuItem>
    );
}
renderSuggestion.propTypes = {
    highlightedIndex: PropTypes.number,
    index: PropTypes.number,
    itemProps: PropTypes.object,
    selectedItem: PropTypes.string,
    suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

function getSuggestions(value, suggestions) {
    // console.log('getSuggestions', suggestions, value)
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;
    return inputLength === 0
        ? []
        : suggestions.filter(suggestion => {
            const keep =
                count < 5 && suggestion.slice(0, inputLength).toLowerCase() === inputValue;
            if (keep) {
                count += 1;
            }
            return keep;
        });
    
}

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 250,
    },
    container: {
        flexGrow: 1,
        position: 'relative',
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing(1),
        left: 0,
        right: 0,
    },
    chip: {
        margin: `${theme.spacing(.5)}px ${theme.spacing(.25)}px`,
    },
    inputRoot: {
        flexWrap: 'wrap',
    },
    inputInput: {
        width: 'auto',
        flexGrow: 1,
    },
    divider: {
        height: theme.spacing(2),
    },
});

function IntegrationDownshift(props) {
    const { classes } = props;
    function handleSubmit(event, selectedItem) {
        event.preventDefault()
        console.log('in handleSubmit', selectedItem);
        props.dispatch({ type: 'FETCH_RECOMMENDATIONS', payload: selectedItem })
    }

    return (
        <div className={classes.root}>
            
            <Downshift id="downshift-simple">
                {({
                    getInputProps,
                    getItemProps,
                    getMenuProps,
                    highlightedIndex,
                    inputValue,
                    isOpen,
                    selectedItem,
                }) => (
                        <form onSubmit={(event)=>handleSubmit(event, selectedItem)}>
                            <div className={classes.container}>
                                {renderInput({
                                    // fullWidth: true,
                                    classes,
                                    InputProps: getInputProps({
                                        placeholder: 'Movie Title',
                                    }),
                                })}
                                <div {...getMenuProps()}>
                                    {isOpen ? (
                                        <Paper className={classes.paper} square>
                                            {getSuggestions(inputValue, props.store.movie_titles).map((suggestion, index) =>
                                                // console.log('suggestion', suggestion);
                                                renderSuggestion({
                                                    suggestion,
                                                    index,
                                                    itemProps: getItemProps({ item: suggestion }),
                                                    highlightedIndex,
                                                    selectedItem,
                                                })
                                            )}
                                        </Paper>
                                    ) : null}
                                </div>
                            </div>
                        </form>
                    )}
            </Downshift>
        </div>
    );
}

IntegrationDownshift.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default connect()(withStyles(styles)(IntegrationDownshift));
export default (withStyles(styles)(IntegrationDownshift));