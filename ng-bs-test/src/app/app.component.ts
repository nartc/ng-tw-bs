import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="row p-4 justify-content-center align-items-center">
      <div class="col-12 p-0 col-md-3 card shadow-lg" style="max-width: 24rem;">
        <img class="card-img-top w-100" src="https://picsum.photos/500" alt="Card image cap" style="height: 16rem;">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <span class="badge badge-pill badge-secondary px-3 py-1 mr-2 mb-2">#photography</span>
          <span class="badge badge-pill badge-secondary px-3 py-1 mr-2 mb-2">#travel</span>
          <span class="badge badge-pill badge-secondary px-3 py-1 mr-2 mb-2">#winter</span>
        </div>
      </div>
      <div class="col-12 p-0 col-md-3 ml-0 ml-md-4 mt-4 mt-md-0 card shadow-lg" style="max-width: 24rem;">
        <img class="card-img-top w-100" src="https://picsum.photos/500" alt="Card image cap" style="height: 16rem;">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <span class="badge badge-pill badge-secondary px-3 py-1 mr-2 mb-2">#photography</span>
          <span class="badge badge-pill badge-secondary px-3 py-1 mr-2 mb-2">#travel</span>
          <span class="badge badge-pill badge-secondary px-3 py-1 mr-2 mb-2">#winter</span>
        </div>
      </div>
      <div class="col-12 p-0 col-md-3 ml-0 ml-md-4 mt-4 mt-md-0 card shadow-lg" style="max-width: 24rem;">
        <img class="card-img-top w-100" src="https://picsum.photos/500" alt="Card image cap" style="height: 16rem;">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <span class="badge badge-pill badge-secondary px-3 py-1 mr-2 mb-2">#photography</span>
          <span class="badge badge-pill badge-secondary px-3 py-1 mr-2 mb-2">#travel</span>
          <span class="badge badge-pill badge-secondary px-3 py-1 mr-2 mb-2">#winter</span>
        </div>
      </div>
      <div class="col-12 p-0 col-md-3 ml-0 ml-md-4 mt-4 mt-md-0 card shadow-lg" style="max-width: 24rem;">
        <img class="card-img-top w-100" src="https://picsum.photos/500" alt="Card image cap" style="height: 16rem;">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <span class="badge badge-pill badge-secondary px-3 py-1 mr-2 mb-2">#photography</span>
          <span class="badge badge-pill badge-secondary px-3 py-1 mr-2 mb-2">#travel</span>
          <span class="badge badge-pill badge-secondary px-3 py-1 mr-2 mb-2">#winter</span>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-bs-test';
}
