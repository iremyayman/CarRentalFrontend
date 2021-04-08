import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';
class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-preview-image',
  templateUrl: './preview-image.component.html',
  styleUrls: ['./preview-image.component.css']
})
export class PreviewImageComponent implements OnInit {

  imageUrl = environment.baseUrl;
  selectedFile: ImageSnippet
  car:Car;
  constructor(private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private carService:CarService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarById(params["carId"])
        
      }
    })
  }

  getCarById(carId:number){
    this.carService.getCarsById(carId).subscribe(response=>{
      this.car=response.data;
    })
  }

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }
  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    console.log(this.car.carId)

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.selectedFile.pending = true;
      this.carService.uploadImage(this.selectedFile.file,this.car).subscribe((response) => {
          this.onSuccess();
        },error => {
          this.onError();
          console.log("carId")
          console.log(error)
          this.toastrService.error(error.error.message)
          setTimeout(function(){
            alert("You are redirected back to the admin page");
           }, 200);
           this.router.navigate(["/admin"]);
          
        })
    });
    reader.readAsDataURL(file);
  }
}