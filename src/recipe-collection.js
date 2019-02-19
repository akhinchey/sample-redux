import React from 'react';
import classNames from 'classnames';
import Modal from 'react-modal';
import RecipeCard from './recipe-card';

export default class RecipeCollection extends React.Component {

    componentWillMount() {
        Modal.setAppElement('body');
     }

    closeModal = () => {
        if (this.props.modalIsOpen) {
            this.props.toggleModalStatus()
        } 
    }

    render () {
        const {recipes,
               toggleRecipeHover,
               updateResultRange,
               modalIsOpen,
               toggleModalStatus,
               modalRecipe,
               setModalRecipe} = this.props;

        if (!recipes.length) {
            return null;
        }

        const containerClasses = classNames({
            "recipe-container" : true,
        })

        const modalStyle = {
            overlay : {
                backgroundColor: 'rgba(200, 200, 200, 0.7)'
            },
            content : {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                margin: 'auto',
                padding: '10px',
                width: '60%',
                height: '70%',
                overflow: 'visible',
                boxShadow: 'none',
                borderRadius: '5px',
                zIndex: '99999'
            }
        };

        const label = modalRecipe
                      ? modalRecipe.data.label
                      : null;

        return (
            <div className={containerClasses}>
                <h2>Recipe Results:</h2>
                {recipes.map((recipe, index) => {
                    return (
                        <RecipeCard key={index}
                                    index={index}
                                    toggleRecipeHover={toggleRecipeHover}
                                    recipe={recipe}
                                    modalIsOpen={modalIsOpen}
                                    toggleModalStatus={toggleModalStatus}
                                    setModalRecipe={setModalRecipe} />
                    )
                })}
                <Modal isOpen={modalIsOpen}
                       style={modalStyle}
                       closeTimeoutMS={150}
                       onRequestClose={this.closeModal}
                       shouldCloseOnOverlayClick={true}
                       contentLabel="Example Modal">

                    <div>{label}</div>
                    <button onClick={() => {this.closeModal()}}>close modal</button>
                </Modal>
                <div>
                    <button onClick={() => {updateResultRange()}}>Show More Recipes</button>
                </div>
                
            </div>
        )
    }
}
