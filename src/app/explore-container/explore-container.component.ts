import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;
  agregarVivenciasForm!: FormGroup;
  imageUrl!: string;
  grabando = false;
  chunks = [];
  mediaRecorder!: MediaRecorder;
  audioUrl!: string;

  constructor(private fb: FormBuilder){
    this.agregarVivenciasForm = this.fb.group   ({
        titulo: new FormControl('', [Validators.required]),
        fecha: new FormControl('', [Validators.required]),
        descripcion: new FormControl('', [Validators.required]),
        foto: new FormControl('', [Validators.required]),
        audio: new FormControl('', [Validators.required])
    });
}
  agregarVivencias(){

  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  // onAudioSelected(event: any) {
  //   const file: File = event.target.files[0];
  //   if (file) {
  //     this.empezarGrabacion();
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       this.audioUrl = e.target.result;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }
  


  // empezarGrabacion() {
  //   this.grabando = true;
  //   this.chunks = [];

  //   navigator.mediaDevices.getUserMedia({ audio: true })
  //     .then(stream => {
  //       this.mediaRecorder = new MediaRecorder(stream);
  //       this.mediaRecorder.start();
  //       document.getElementById("audio-input")!.style.display = "none";

        // this.mediaRecorder.addEventListener("dataavailable", (evento: BlobEvent) => {
        //   if (this.grabando) {
        //     this.chunks.push(evento.data);
        //   }
        // });
  //     });
  // }

  // pararGrabacion() {
  //   this.grabando = false;
  //   this.mediaRecorder.stop();

  //   const blob = new Blob(this.chunks, { type: "audio/mp3" });
  //   this.audioUrl = URL.createObjectURL(blob);
  // }
}
