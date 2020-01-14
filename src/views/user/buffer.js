<Grid container spacing={3}>
                <Grid container xs={12} >
                  //Navbar
                </Grid>

                <Grid container xs={12}>
                        <Grid
                            container
                            spacing={3}
                            direction="column"
                            alignItems="center"
                            justify="center"
                            style={{ minHeight: '70vh',marginTop:'0' }}
                        >
                            <div style={{backgroundColor:'white',padding:'100px',marginTop:'0'}}>
                                <Grid container xs={12} direction="column" justify="center" alignItems="center" >
                                    <Typography  variant="h4" gutterBottom>
                                    </Typography>
                                </Grid>   
                                <Grid item xs={12} style={{ minWidth: '50vh' }}>
                                    <Helmet>
                                        <style>{'body { background-color: white; }'}</style>
                                    </Helmet>
                                    <PostBodyUser></PostBodyUser>
                                </Grid>   
                            </div>
                        </Grid> 
                </Grid>
                <Grid item xs={12} style={{ marginBottom:'0' }}
                            alignItems="center"
                            justify="center"
                >
                    //Footer
                </Grid>
            
            </Grid>