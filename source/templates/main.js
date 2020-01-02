const templateMain = `
  <div id="about"></div>
  <!-- menu -->
  <div class="menu">
    <div class="menu-container">
      <div class="row end-xs">

        <div class="col-md-2 col-sm-3 col-xs-6">
          <a href="#about">
            <img src="./public/images/logo/svg/logo.web.svg" alt="logo" class="menu__logo-d">
          </a>
        </div>

        <div class="col-md col-sm-6 end-sx text--center">
          <nav class="menu__navigation">
            {% data.menu.forEach(i => { %}
              <div class="navigation__item">
                <a href="#{{ i.link }}" class="">{{ i.title }}</a>
              </div>
            {% }); %}
          </nav>
        </div>

        <div class="col-md-2 col-sm-3 col-xs-6 text--left menu__contacts contacts" >

          <div class="contact-container contact__phone">
            <span class="icon phone"></span>
            <span>
              <a href="tel:{{ data.phone }}" class="text--nowrap">
                <span class="text--size-mb text--color-4">{{ data.phoneFormat.substr(0,6) }}</span>
                <span class="text--size-l text--bold phone">{{ data.phoneFormat.substr(6) }}</span>
              </a>
            </span>
          </div>
          
          <div class="contact-container contact__mail ">
          <span class="icon mail"></span>
          <span>
            <a href="mailto:{{ data.mail }}" class="text--size-l text--nowrap ">
              {{ data.mail }}
            </a>
          </span>
        </div>

      </div>

      </div>
    </div>
  </div>
  <!-- menu end -->

  <!-- about -->
  <div class="row start-md center-sm center-xs about" >
    <div class="col-lg-5 col-md-6 col-sm-7 col-sx-12 about-container">
      <h1 class="text--size-xxl">{{ data.offer.title }}</h1>
      <br>
      <p class="text--size-xl">{{ data.offer.description }}</p>
      <br>
      <br>
      <a href="#contacts">
        <button>{{ data.offer.button }}</button>
      </a>
    </div>
  </div>

  <!-- el-panel -->
  <div class="row padding-body el-panel" id="el-panels">
    <h2 style="width: 100%;" class="text--size-xxl">{{ data.elPanel.title }}</h2>
    <br>
    <p class="text--size-xl">{{ data.elPanel.description }}</p>
    <br>

    <div class="row panel-grid center-xs">
      {% data.elPanel.content.forEach(i => { %}
        <div class="col-md-{{ i.size }} col-sm-4 col-xs-6 panel-grid__row">
          <img src="{{ i.img }}" alt="electric panel" class="panel-grid__img">
          <br>
          <h3 class="text--size-l" class="panel-grid__title">{{ i.title }}</h3>
          {% if(i.abbr) { %}
            <abbr class="text--color-4 text--up">
              {{ i.abbr.join(', ') }}
            </abbr>
            <br>
          {% } %}
          <!-- <span class="el-panel__button panel-grid__button">
            {{ data.elPanel.button }}
          </span> -->
        </div>
      {% }); %}
    </div>
    <ul class="panel-list" >
      {% data.elPanel.content2.forEach(i => { %}
        <li class="col-md-4 col-sm-6 col-xs-12 panel-list__item">
          <h3 class="text--size-l" >
            {{ i.title }}
          </h3>
          <abbr class="text--color-4 text--up">
            {{ i.abbr ? i.abbr.join(', ') : '' }}
          </abbr>
        </li>
      {% }); %}
    </ul>
  </div>

  <!-- offer -->
  <div class="row padding-body offer">
    <div class="col-md-12 col-sm-12 col-xs-12 offer-container">
      <span class="text--size-xxl text--bold">{{ data.offer2.description }}</span>
      <a href="#contacts">
        <button>{{ data.offer2.button }}</button>
      </a>
    </div>
  </div>

  <!-- suppliers -->
  <div class="row padding-body supplier">
    <div class="col-md-12">
      <h2 class="text--size-xxl">{{ data.supplier.title }}</h2>
      <br>
      <br>
      <p class="text--size-xl"> {{ data.supplier.description }} </p>
      <br>
      <ul class="supplier__list">
        {% data.supplier.imgs.forEach(i => { %}
        <li>
          <img src="{{ i }}" alt="logo supplier" class="supplier__logo" height="52px">
        </li>
        {% }); %}
      </ul>
    </div>
  </div>

  <!-- advantages -->
  <div class="row advantages">
    <div class="padding-body">
      <h2 class="text--size-xxl">{{ data.advantages.title }}</h2>
      <br>
      <p class="text--size-xl">{{ data.advantages.description }}</p>
      <ul class="row advantage-container text--center">
        {% data.advantages.content.forEach(i => { %}
          <li class="col-md-4 col-sm-6 col-xs-12">
            <h3 class="advantage-title text--bold">{{ i.title }}</h3>
            <span class="advantage-postfix">{{ i.postfix }}</span>
            <br>
            <span class="advantage-caption text--size-m">{{ i.caption }}</span>
          </li>
        {% }); %}
      </ul>
    </div>
  </div>

  <!-- projects -->
  <div class="row padding-body projects" id="projects">
    <div class="col-md-12">
      <h2 class="text--size-xxl">{{ data.projects.title }}</h2>
      <br>
      <br>
      <p class="text--size-xl"> {{ data.projects.description }} </p>
      <br>
      <ul class="row projects__list">
        {% data.projects.content.forEach(i => { %}
        <li class="col-md-4 col-sm-6 col-xs-12">
          <figure class="photo-container">
            <img src="{{ i.img }}" alt="logo supplier" class="photo-project">
          </figure>
          <figcaption class="text-size-m figcaption">{{ i.title }}</figcaption>
        </li>
        {% }); %}
      </ul>
      <br>
      <br>
      <br>
      <br>
      <br>
      <h4 class="text--size-xl">{{ data.projects.title2 }}</h4>
      <ul class="row projects__list">
        {% data.projects.content2.forEach(i => { %}
        <li class="col-md-4 col-sm-6 col-xs-12 projects-list__item">
          {{ i }}
        </li>
        {% }); %}
      </ul>
    </div>
  </div>

  <!-- contacts -->
  <div class="row padding-body " id="contacts">
    <div class="col-md-5 col-sm-12 col-xs-12 contacts">
      <h2 class="text--size-xxl">Контакты</h2>
      <br>
      <div class="text--left contacts-container" >

        <div class="contact-container contact__mail ">
          <span class="icon mail"></span>
          <span>
            <span class="text--color-4">
              {{ data.mailLabel }}
            </span>
            <br>
            <a href="mailto:{{ data.mail }}" class="text--size-xl text--nowrap ">
              {{ data.mail }}
            </a>
          </span>
        </div>

        <div class="contact-container contact__phone">
          <span class="icon phone "></span>
          <span>
            <span class="text--color-4">
              {{ data.phoneLabel }}
            </span>
            <br>
            <a href="tel:{{ data.phone }}" class="text--nowrap">
              <span class="text--size-l text--color-4">{{ data.phoneFormat.substr(0,6) }}</span>
              <span class="text--size-xl text--bold phone">{{ data.phoneFormat.substr(6) }}</span>
            </a>
          </span>
        </div>

        <div class="contact-container contact__access-time">
          <span class="icon access-time"></span>
          <span>
            <span class="text--color-4">
              {{ data.accessTimeLabel }}
            </span>
            <br>
            <span class="text--size-l text--nowrap">{{ data.accessTime }}</span>
          </span>
        </div>

        <div class="contact-container contact__addres">
          <span class="icon address"></span>
          <span>
            <span class="text--color-4">
              {{ data.addressLabel }}
            </span>
            <br>
            <a href="{{ data.mapLink }}" rel="noreferrer" target="_blank">
              <span class="text--size-l">{{ data.address }}</span>
            </a>
          </span>
        </div>

      </div>
    </div>
    <div class="col-md-7 col-sm-12 col-xs-12 map">
      <iframe
        title="map"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A2f08d4818a67ae5c4000932882524ff0c1090242e5b0f6b1f1414b7ff4a74791&amp;source=constructor"
        width="100%"
        height="400"
        frameborder="0"
      ></iframe>
    </div>
  </div>

  <!-- signature -->
  <br>
  <br>
  <hr>
  <div class="text--color-4 signature">
    <img src="./public/images/logo/svg/logo-tagline.web.svg" alt="logo" class="signature__logo">
    <p class="signature__text text--color-4">
      {{ data.signature }}
    </p>
  </div>

  <br>
  <br>
`;

if (!this.window) module.exports = templateMain;
