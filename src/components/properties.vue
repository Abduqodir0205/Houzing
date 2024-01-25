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
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d16019.61029816283!2d69.22230813249418!3d41.23730550362097!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1706192906709!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
                <span>
                    <input type="text">
                    <label for="">Latidude</label>
                </span>
                <span>
                    <input type="text">
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
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <button>Upload</button>
            </div>
            <div class="main-properties__content-media-gallary">
                <p>Gallery</p>
                <button>Upload</button>
            </div>
            <div class="main-properties__content-media-attachment">
                <p>Attachment</p>
                <span>
                    <img src="../assets/images/svg/file 1 (1).svg" alt="">
                    <p>test_property.pdf</p>
                </span>
                <button>Upload</button>
            </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {};
</script>
<style lang=""></style>
