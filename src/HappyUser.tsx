import { Button, Card, CardActions, CardContent, CardHeader, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import RemoveIcon from '@material-ui/icons/Remove';
import 'date-fns';
import { Field, FieldArray, Form, Formik } from 'formik';
import React, { useState } from 'react';

const HappyUser = ({ user }: any) => {

    const [usr, setUsr] = useState(user);
    const handleInsertNewPiece = (pushFunc: any) => {
        pushFunc({ key: '', values: [''] });
    };
    return (
        <div style={{ padding: '2rem' }}>
            <Formik
                initialValues={usr}
                onSubmit={(values, actions) => {
                    setUsr(values);
                    actions.setSubmitting(false);

                }}
            >
                {({ values, handleSubmit }) => (
                    <Form>
                        <Card raised>
                            <CardHeader
                                title="User Form"
                                subheader="Edit with Formik FieldArray"></CardHeader>
                            <CardContent>

                                <Grid container spacing={2} justify="space-between" >

                                    <Grid item xs >
                                        <FieldArray name={`user-pieces`}>
                                            {({ remove, push }) => (
                                                <>
                                                    {values['user-pieces'] && values['user-pieces'].length > 0 &&
                                                        values['user-pieces'].map((ups: any, index: number) => (

                                                            <React.Fragment key={`user-pieces-${index}`}>
                                                                <Grid container spacing={2} alignItems="center">
                                                                    <Grid item xs={6}>
                                                                        <Paper variant="outlined" style={{ padding: '1rem' }}>

                                                                            <Grid container spacing={1} justify="space-between" alignItems="center">
                                                                                <Grid item>
                                                                                    <Field
                                                                                        name={`user-pieces.${index}.key`}
                                                                                        as={TextField}
                                                                                        label="Key"
                                                                                        variant="outlined"
                                                                                        fullWidth
                                                                                    />
                                                                                </Grid>
                                                                                <Grid item>
                                                                                    <Button color="secondary" size="small" onClick={() => remove(index)}>
                                                                                        <RemoveIcon /> Remove Piece
                        </Button>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </Paper>

                                                                    </Grid>
                                                                    <Grid item xs={6}>
                                                                        <FieldArray name={`user-pieces.${index}.values`}>
                                                                            {({ removeValue, pushValue }) => (
                                                                                <>
                                                                                    <Grid container spacing={2} justify="space-between" alignItems="center">
                                                                                        {ups &&
                                                                                            ups.values &&
                                                                                            ups.values.length > 0 &&
                                                                                            ups.values.map((pi: any, pi_index: number) => (

                                                                                                <>
                                                                                                    <Grid item xs={11} >
                                                                                                        <Field
                                                                                                            name={`user-pieces.${index}.values.${pi_index}`}
                                                                                                            as={TextField}
                                                                                                            label={`${ups.key} ${pi_index + 1} `}
                                                                                                            variant="outlined"
                                                                                                            fullWidth
                                                                                                        />
                                                                                                    </Grid>
                                                                                                    <Grid item xs={1} style={{ marginTop: '16px' }}>
                                                                                                        {pi_index > 0 && (
                                                                                                            <IconButton
                                                                                                                size="small"
                                                                                                                onClick={() => {
                                                                                                                    if (pi_index > 0) {
                                                                                                                        removeValue(pi_index);
                                                                                                                    }
                                                                                                                }}
                                                                                                            >
                                                                                                                <HighlightOffIcon color="error" />
                                                                                                            </IconButton>
                                                                                                        )}
                                                                                                    </Grid>
                                                                                                </>
                                                                                            ))}
                                                                                    </Grid>
                                                                                    <Grid container spacing={2}>
                                                                                        <Grid item xs={12}>
                                                                                            <Button color="secondary" size="small" onClick={() => pushValue('')}>
                                                                                                <AddBoxIcon /> Add
              </Button>
                                                                                        </Grid>
                                                                                    </Grid>
                                                                                </>
                                                                            )}
                                                                        </FieldArray>

                                                                    </Grid>
                                                                </Grid>

                                                                <hr style={{ margin: '1%' }} />
                                                            </React.Fragment>
                                                        ))}

                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12}>
                                                            <Button color="secondary" size="small" onClick={() => handleInsertNewPiece(push)}>
                                                                <AddBoxIcon /> Add New Piece
              </Button>
                                                        </Grid>
                                                    </Grid>
                                                </>
                                            )}
                                        </FieldArray>

                                    </Grid>


                                </Grid>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="primary" size="small" type="submit">Submit</Button>
                            </CardActions>
                        </Card>
                    </Form>
                )
                }
            </Formik >

            <div>
                {JSON.stringify(usr)}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }} >
                <Card variant="outlined" style={{ width: '100%', marginTop: '1rem' }} >
                    <CardHeader
                        title="User Form"
                        subheader="View with Typography"></CardHeader>
                    <CardContent>
                        <Grid container spacing={2} justify="space-between" >

                            <Grid item xs >
                                <Typography variant="h6">Given Names(s)</Typography>
                                <Typography variant="body1" color="textSecondary">{usr.givenName}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6">Last Name</Typography>
                                <Typography variant="body1" color="textSecondary">{usr.lastName}</Typography>

                            </Grid>

                            <Grid item xs={12} container justify="space-between" alignItems="center" spacing={2}>
                                <Grid item>

                                    <Typography variant="h6">Birth Date</Typography>
                                    <Typography variant="body1" color="textSecondary">{usr.birthDate}</Typography>
                                </Grid>
                                <Grid item xs>

                                    <Typography variant="h6">Deceaced</Typography>
                                    <Typography variant="body1" color="textSecondary">{usr.deceased ? 'Yes' : 'No'}</Typography>
                                </Grid>

                                <Grid item>

                                    <Typography variant="h6">Gender</Typography>
                                    <Typography variant="body1" color="textSecondary">{usr.gender}</Typography>
                                </Grid>

                                <Grid item xs={12} container alignItems="center" justify="space-between" spacing={4}>
                                    <Grid item xs>
                                        <FormControl fullWidth disabled>
                                            <InputLabel>Country</InputLabel>
                                            <Select value={usr.country}  >
                                                <MenuItem value={1}>USA</MenuItem>
                                                <MenuItem value={44}>UK</MenuItem>
                                                <MenuItem value={33}>France</MenuItem>
                                            </Select>

                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="h6">Time</Typography>
                                        <Typography variant="body1" color="textSecondary">{usr.empTime}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </Card>

            </div>
        </div >



    )
}

export default HappyUser;