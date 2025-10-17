// photosData: maps event names to their images
const photosData = {
  "LPL": [
    "/images/gallery/LPL/lrz8kkndssnvv4nhruxr.jpg",
    "/images/gallery/LPL/p8fumkky8gd5uakisuj1.jpg",
    "/images/gallery/LPL/qtibjqscyxwexnltxdnv.jpg",
    "/images/gallery/LPL/s7bjxlaqpml2xcj64t6t.jpg",
    "/images/gallery/LPL/t8zyjepdnyyct7a3j8ng.jpg",
    "/images/gallery/LPL/zcgzw7itdwoemoonq3ht.jpg"
  ],
  "IMLD": [
    "/images/gallery/IMLD/k36s3dhlztek8ve5cber.jpg",
    "/images/gallery/IMLD/mvaomi2auwpsrxkyljtg.jpg",
    "/images/gallery/IMLD/vcspzi73avedzi2cvvar.jpg"
  ],
  "Deprador & Kaladarshan": [
    "/images/gallery/Deprador/j97peznh6ybcwnaidban.jpg",
    "/images/gallery/Deprador/kro2ht0acvmhpsdfzqe1.jpg",
    "/images/gallery/Deprador/nkb1b4pzj2vrydwzditz.jpg",
    "/images/gallery/Deprador/nn2uw9zbxzxvjkvnydpf.jpg",
    "/images/gallery/Deprador/pl3rubuaggzcifbbqbvu.jpg",
    "/images/gallery/Deprador/uih2xbpwgealztyo5h8x.jpg",
    "/images/gallery/Deprador/yp1v4knjlnirfwgut5au.jpg",
    "/images/gallery/Deprador/zw4w9roltmqvjvlba8m0.jpg"
  ],
  "Manthan": [
    "/images/gallery/manthan/b3yne01gsuxrnbvfvoiu.jpg",
    "/images/gallery/manthan/e0othc9rocozbfm8ezqs.jpg",
    "/images/gallery/manthan/f8aq8zomezpxyxpdk5vb.jpg",
    "/images/gallery/manthan/gmhy4sf8zdl6mhw7ehq5.jpg",
    "/images/gallery/manthan/pwcsdnhnl4ssmlmfrgpg.jpg",
    "/images/gallery/manthan/pcsi99kkhwmgcn2tu1qa.jpg",
    "/images/gallery/manthan/xuww2vkfv95ybmopodbc.jpg",
    "/images/gallery/manthan/z8ug1gdo24iw4dmva5nf.jpg"
  ],
  "Farewell": [
    "/images/gallery/farewell/aqwxdawa6cjznnd3yvyr.jpg",
    "/images/gallery/farewell/gwr963xa5orntcwxr1xz.jpg",
    "/images/gallery/farewell/lkbsiql9z23nfglqvhee.jpg",
    "/images/gallery/farewell/n2kqzuowj16uu8l1dfxp.jpg",
    "/images/gallery/farewell/nftqloouu8ad2zz8yjrh.jpg",
    "/images/gallery/farewell/xrghbzfye5wb3iuwb84n.jpg"
  ],
};

// Function to show event photos below the gallery
function showEventPhotos(eventName) {
  const container = document.getElementById("event-photos");
  container.innerHTML = "";             // clear previous photos
  container.classList.remove("hidden"); // make container visible

  // Title
  const title = document.createElement("h2");
  title.textContent = `${eventName} Photos`;
  title.className = "text-2xl font-bold mb-6 text-center";
  container.appendChild(title);

  // Photo grid
  const photos = photosData[eventName] || [];
  if (photos.length === 0) {
    const msg = document.createElement("p");
    msg.className = "text-gray-600 text-center";
    msg.textContent = "No photos available.";
    container.appendChild(msg);
    return;
  }

  const galleryDiv = document.createElement("div");
  galleryDiv.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6";

  photos.forEach(src => {
    const imgDiv = document.createElement("div");
    imgDiv.className = "w-full h-60 overflow-hidden rounded-lg shadow-lg";
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Event Photo";
    img.className = "w-full h-full object-cover hover:scale-105 transition-transform";
    imgDiv.appendChild(img);
    galleryDiv.appendChild(imgDiv);
  });

  container.appendChild(galleryDiv);

  // Back to top button
  const backBtn = document.createElement("button");
  backBtn.textContent = "Back to All Events";
  backBtn.className = "mt-8 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors mx-auto block";
  backBtn.onclick = () => {
    document.getElementById("events-gallery").scrollIntoView({ behavior: "smooth", block: "start" });
  };
  container.appendChild(backBtn);

  // Scroll to photos smoothly
  container.scrollIntoView({ behavior: "smooth", block: "start" });
}
