import { Button, Card, CardActions, CardContent, CardHeader, Grid, IconButton, Paper, TextField, Typography } from '@material-ui/core';
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
                                                                            {({ remove: removeValue, push: pushValue }) => (
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
                        <Grid container justify="space-between">
                            {usr["user-pieces"].map((up: any) => (
                                <Grid container justify="space-between">
                                    <Grid item xs={5}>
                                        <Typography variant="h5">{`Key: ${up.key}`}</Typography>
                                    </Grid>
                                    <Grid item xs={7} container direction="column">
                                        {up.values.map((v:any) => (
                                            <Grid item>
                                                <Typography color="textSecondary" variant="body1">{v}</Typography>
                                                </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            ))}
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