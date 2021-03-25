export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: '바둑이',
      authorLastName: 'Dog',
      authorId: 123,
      createAt: new Date()
    }).then(()=>{
      dispatch({type: 'CREATE_PROJECT', project});  
    }).catch((err)=>{
      dispatch({type: 'CREATE_PROJECT_ERROR', err});
    })
    
  }
};