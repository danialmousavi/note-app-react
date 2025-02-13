import React, { Component } from 'react'
import Note from './Note'
import ColorBox from './ColorBox'
import { FaEraser } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

export default class NoteApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            colors: [
                "#fff",
                "#FFD37F",
                "#FFFA81",
                "#D5FA80",
                "#78F87F",
                "#79FBD6",
                "#79FDFE",
                "#7AD6FD",
                "#7B84FC",
                "#D687FC",
                "#FF89FD",
            ],
            notes: [],
            noteTitle: '',
            inputColor: '#fff'
        }
    }
    noteInputHandler(e){
        this.setState({noteTitle:e.target.value})
    }
    addNoteHandler(){
        if(this.state.noteTitle){
            let newNote={
                id: this.state.notes.length+1,
                title:this.state.noteTitle,
                color: this.state.inputColor
            }
            this.setState(prevState=>({
                notes:[...prevState.notes,newNote],
                noteTitle:''
            }))
        }
        
    }
    selectColorHandler(color){
        this.setState({inputColor:color})
    }
    cleanInput(){
        this.setState({noteTitle:''})
    }
    render() {
        return (
            <>
                <div>
                    <section id="home">
                        <div className="container">
                            <div className="header upper">React Note App</div>

                            <br /><br />
                            <div className="flex row-gt-sm">
                                <div className="flex flex-50-gt-sm">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <input id="input-field" value={this.state.noteTitle} className="form-control" type="text" style={{ backgroundColor: this.state.inputColor }} onChange={(e)=>this.noteInputHandler(e)} placeholder="Something here..." />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <div id='color-select'>
                                            {this.state.colors.map(color=>(
                                                <ColorBox key={color} color={color} onColor={()=>this.selectColorHandler(color)}/>

                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                                        <button id="btn-save" type="button" className="btn btn-outline-info" onClick={()=>this.addNoteHandler()}><FaPlus/></button>
                                        <button id="btn-delete" type="button" className="btn btn-outline-danger" onClick={()=>this.cleanInput()}><FaEraser/></button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex row-gt-sm">

                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="container">
                                        <div className="row">
                                            <div id='listed' className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 p-3 card-columns">
                                                {this.state.notes.map(note=>(
                                                <Note key={note.id} {...note}/>
                                                ))}

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </section>
                </div>
            </>
        )
    }
}
