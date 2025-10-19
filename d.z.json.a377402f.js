const t=document.getElementById("bookmarkInput"),e=document.getElementById("addBookmarkBtn"),n=document.getElementById("bookmarkList");let u=[];function i(){n.innerHTML=u.map((t,e)=>`
    <li data-index="${e}">
      <a href="${t}" target="_blank">${t}</a>
      <div>
        <button class="edit">\u{420}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438}</button>
        <button class="delete">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}</button>
      </div>
    </li>
  `).join("")}function a(){let e=t.value.trim();if(!e)return void alert("Введіть URL!");u.push(e),t.value="",i()}e.addEventListener("click",a),t.addEventListener("keypress",t=>{"Enter"===t.key&&a()}),n.addEventListener("click",t=>{let e=t.target.closest("li");if(!e)return;let n=parseInt(e.dataset.index);if(t.target.classList.contains("delete"))u.splice(n,1),i();else t.target.classList.contains("edit")&&function(t){let e=prompt("Редагувати URL:",u[t]);e&&""!==e.trim()&&(u[t]=e.trim(),i())}(n)});
//# sourceMappingURL=d.z.json.a377402f.js.map
