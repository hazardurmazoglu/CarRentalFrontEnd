import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-add-car-image',
  templateUrl: './add-car-image.component.html',
  styleUrls: ['./add-car-image.component.css']
})
export class AddCarImageComponent implements OnInit {

  carImage:CarImage;
  carDetail:CarDetail;
  imageUrl = environment.baseUrl;
  selectedFile: ImageSnippet;

  constructor(private activatedRoute:ActivatedRoute,private carService:CarService,
    private toastrService:ToastrService,private router:Router,
    private carImageService:CarImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetailById(params["carId"]);
      }
    })

    

  }


  getCarDetailById(id:number){
    this.carService.getCarDetail(id).subscribe(response=>{
      this.carDetail=response.data;
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
    console.log(this.carDetail.carId)

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.selectedFile.pending = true;
      this.carImageService.uploadImage(this.selectedFile.file,this.carDetail.carId).subscribe((response) => {
          this.onSuccess();
        },error => {
          this.onError();
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
