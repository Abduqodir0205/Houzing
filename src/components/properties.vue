<template>
  <main>
    <div class="container">
      <div class="main-properties__content">
        <div class="main-properties__content-title">
          <h1>Add new property</h1>
        </div>
        <div
          class="main-properties__content-contactInformation main-properties"
        >
          <h2>Contact information</h2>
          <form action="">
            <div>
              <span>
                <input type="text" placeholder="" />
                <label for="">Property title*</label>
              </span>
              <span>
                <input type="text" placeholder="" />
                <label for="">Type</label>
              </span>
            </div>
            <!-- <input type="text" placeholder="Property Description*"> -->
            <textarea
              cols="20"
              rows="10"
              placeholder="Property Description*"
            ></textarea>
          </form>
        </div>

        <div class="main-properties__content-additional main-properties">
          <h2>Additional</h2>
          <form action="">
            <span>
              <input type="text" placeholder="" />
              <label for="">Property ID</label>
            </span>
            <select placeholder="">
              <option value="Parent property">Parent property</option>
            </select>
            <select placeholder="">
              <option value="Status">Status</option>
            </select>
            <span>
              <input type="text" placeholder="" />
              <label for="">Label</label>
            </span>
            <span>
              <input type="text" placeholder="" />
              <label for="">Material</label>
            </span>
            <span>
              <input type="text" placeholder="" />
              <label for="">Rooms</label>
            </span>
            <span>
              <input type="text" placeholder="" />
              <label for="">Beds</label>
            </span>
            <span>
              <input type="text" placeholder="" />
              <label for="">Baths</label>
            </span>
            <span>
              <input type="text" placeholder="" />
              <label for="">Garages</label>
            </span>
            <span>
              <input type="text" placeholder="" />
              <label for="">Year bulid</label>
            </span>
            <span>
              <input type="text" placeholder="" />
              <label for="">Home area (sqft)</label>
            </span>
            <span>
              <input type="text" placeholder="" />
              <label for="">Lot dimensions</label>
            </span>
            <span>
              <input type="text" placeholder="" />
              <label for="">Lot area (sqft)</label>
            </span>
          </form>
        </div>

        <div class="main-properties__content-price main-properties">
          <h2>Price</h2>
          <form action="">
            <span>
              <input type="text" />
              <label for="">Price ($)</label>
            </span>
            <span>
              <input type="text" />
              <label for="">Price Prefix</label>
            </span>
            <span>
              <input type="text" />
              <label for="">Price Suffix</label>
            </span>
            <span>
              <input type="text" />
              <label for="">Price Custom</label>
            </span>
          </form>
        </div>

        <div class="main-properties__content-location main-properties">
          <h2>Location</h2>
          <form action="">
            <div>
              <span>
                <input type="text" />
                <label for="">Regions</label>
              </span>
              <span>
                <input type="text" />
                <label for="">Friendly address</label>
              </span>
            </div>
            <span class="main-properties__content-location-mapInput">
              <input type="text" />
              <label for="">Map location</label>
            </span>
            <div class="main-properties__content-location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d16019.61029816283!2d69.22230813249418!3d41.23730550362097!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1706192906709!5m2!1sru!2s"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <span>
                <input type="text" />
                <label for="">Latidude</label>
              </span>
              <span>
                <input type="text" />
                <label for="">Logtitude</label>
              </span>
            </div>
          </form>
        </div>
        <div class="main-properties__content-media main-properties">
          <h2>Media</h2>
          <div class="main-properties__content-media-images">
            <p>Featured image</p>
            <div>
              <span>
                <div v-for="element in default"></div>
              </span>
              <div v-for="(image, key) in images">
                <img v-bind:ref="'image' + parseInt(key)" alt="Error" />
              </div>
            </div>
            <span>
              <label for="upload-photo">Upload</label>
              <input
                type="file"
                @input="onFileChange"
                name="photo"
                multiple
                id="upload-photo"
              />
            </span>
          </div>
          <div class="main-properties__content-media-gallary">
            <p>Gallery</p>
            <div class="main-properties__content-media-gallary-img">
              <div v-for="(image, key) in gallary">
                <img v-bind:ref="'image' + parseInt(key)" alt="Error" />
              </div>
            </div>
            <span>
              <label for="upload-photo">Upload</label>
              <input
                type="file"
                @input="onFileChangeGallare"
                name="photo"
                multiple
                id="upload-photo"
              />
            </span>
          </div>
          <div class="main-properties__content-media-attachment">
            <p>Attachment</p>
            <span>
              <img src="../assets/images/svg/file 1 (1).svg" alt="" />
              <p>test_property.pdf</p>
            </span>
            <span>
              <label for="upload-photo">Upload</label>
              <input
                type="file"
                @input="onFileChange"
                name="photo"
                multiple
                id="upload-photo"
              />
            </span>
          </div>

          <div class="main-properties__content-media-videoLink">
            <form action=""></form>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      urls: [],
      images: [],
      gallary: [],
      show: false,
      default: 4,
    };
  },
  methods: {
    onFileChangeGallare(e) {
      var selectedFiles = e.target.files;
      for (let i = 0; i < selectedFiles.length; i++) {
        this.gallary.push(selectedFiles[i]);
      }
      for (let i = 0; i < this.gallary.length; i++) {
        let reader = new FileReader(); //instantiate a new file reader
        reader.addEventListener(
          "load",
          function () {
            this.$refs["image" + parseInt(i)][0].src = reader.result;
          }.bind(this),
          false
        ); //add event listener

        reader.readAsDataURL(this.gallary[i]);
      }
    },
    onFileChange(e) {
      this.show = true;
      var selectedFiles = e.target.files;
      for (let i = 0; i < selectedFiles.length; i++) {
        this.images.push(selectedFiles[i]);
        if (this.default > 0) {
          this.default--;
        } else {
          continue;
        }
      }
      for (let i = 0; i < this.images.length; i++) {
        let reader = new FileReader(); //instantiate a new file reader
        reader.addEventListener(
          "load",
          function () {
            this.$refs["image" + parseInt(i)][0].src = reader.result;
          }.bind(this),
          false
        ); //add event listener

        reader.readAsDataURL(this.images[i]);
      }

      // console.log(this.images);
    },
    removeImage(i) {
      // alert(i);

      var arrayImages = this.images;
      var index = arrayImages.indexOf(arrayImages[i]);
      arrayImages.splice(index, i);
    },
  },
};
</script>
<style></style>
