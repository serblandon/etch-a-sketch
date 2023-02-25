const container = document.querySelector("#container");

		for (let i = 1; i <= 256; i++) {
			const gridItem = document.createElement("div");
			gridItem.classList.add("grid-item");

      gridItem.addEventListener("mouseover", function() {
        gridItem.style.backgroundColor = "#000";

      })

			container.appendChild(gridItem);
    }