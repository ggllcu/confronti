<script>
  let isActive = false;

function toggleMenu() {
  isActive = !isActive;
}

function closeMenu() {
    isActive = false;
  }
</script>

<nav class="navbar is-primary" aria-label="main navigation">
  <div class="container is-max-desktop">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="https://placehold.co/200x80" width="112" height="28" alt="Logo Confronti 2024">
    </a>

    <button class="navbar-burger {isActive ? 'is-active' : ''}" aria-label="menu" aria-expanded="false" data-target="navbar" on:click={toggleMenu}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  </div>

  <div id="navbar" class="navbar-menu {isActive ? 'is-active' : ''}">
    <div class="navbar-end">
      <a on:click={closeMenu} class="navbar-item" href="/">
        Home
      </a>

      <a on:click={closeMenu} class="navbar-item" href="/chi-siamo">
        Chi siamo
      </a>

      <a on:click={closeMenu} class="navbar-item" href="/programma">
        Programma
      </a>

      <a on:click={closeMenu} class="navbar-item" href="/candidati">
        Candidati
      </a>

      <a on:click={closeMenu} class="navbar-item" href="/eventi">
        Eventi
      </a>

      <a on:click={closeMenu} class="navbar-item" href="/notizie">
        Notizie
      </a>

    </div>
  </div>
</div>
</nav>
