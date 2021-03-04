---

title: Navigation
name: navigation
category: layout
subcategory: General
layout: wide
id: navigation-page

---

## Main header

The main header has a button, hidden on larger screens, that pops out the search form on mobile.

<header class="c-main-header" role="banner">
  <div class="o-wrapper o-grid">
    <div class="o-grid__row">
      <div class="o-grid__box o-grid__box--threequarters o-grid__box--threequarters@medium o-grid__box--threequarters@small o-grid__box--threequarters@tiny">
        <h2 class="c-main-header__title"><a class="c-main-header__link" href="https://www.york.ac.uk"><img class="c-main-header__logo" src="https://www.york.ac.uk/static/stable/img/logo.svg" alt="University of York logo"></a></h2>
      </div>
      <div class="o-grid__box o-grid__box--quarter o-grid__box--quarter@medium o-grid__box--quarter@small o-grid__box--quarter@tiny">
        <form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--header">
          <fieldset>
            <div class="c-form__element">
              <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search york.ac.uk" />
              <input type="hidden" name="site" value="yorkweb">
              <a class="c-btn c-btn--medium js-submit-form" href="https://www.york.ac.uk/search" role="button"><i class="c-icon c-icon--search"></i></a>
            </div>
          </fieldset>
        </form>
        <a href="#Mobile-Search-2" class="c-mobile-search-button js-toggle-button"><i class="c-icon c-icon--search"></i></a>
      </div>
    </div>
  </div>
</header>
<form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--mobile-search" id="Mobile-Search-2">
  <fieldset class="c-form__fieldset">
    <legend class="c-form__legend">Search york.ac.uk</legend>
    <div class="o-grid">
      <div class="o-grid__row">
        <div class="o-grid__box o-grid__box--full">
          <div class="c-form__element">
            <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search york.ac.uk">
            <input type="hidden" name="site" value="yorkweb">
            <a class="c-btn c-btn--medium js-submit-form" href="#" role="button">Search</a>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</form>

```markup
<header class="c-main-header" role="banner">
  <div class="o-wrapper o-grid">
    <div class="o-grid__row">
      <div class="o-grid__box o-grid__box--threequarters o-grid__box--threequarters@medium o-grid__box--threequarters@small o-grid__box--threequarters@tiny">
        <h2 class="c-main-header__title"><a class="c-main-header__link" href="https://www.york.ac.uk"><img class="c-main-header__logo" src="https://www.york.ac.uk/static/stable/img/logo.svg" alt="University of York logo"></a></h2>
      </div>
      <div class="o-grid__box o-grid__box--quarter o-grid__box--quarter@medium o-grid__box--quarter@small o-grid__box--quarter@tiny">
        <form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--header">
          <fieldset>
            <div class="c-form__element">
              <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search york.ac.uk" />
              <input type="hidden" name="site" value="yorkweb">
              <a class="c-btn c-btn--medium js-submit-form" href="https://www.york.ac.uk/search" role="button"><i class="c-icon c-icon--search"></i></a>
            </div>
          </fieldset>
        </form>
        <a href="#Mobile-Search-2" class="c-mobile-search-button js-toggle-button"><i class="c-icon c-icon--search"></i></a>
      </div>
    </div>
  </div>
</header>
<form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--mobile-search" id="Mobile-Search-2">
  <fieldset class="c-form__fieldset">
    <legend class="c-form__legend">Search york.ac.uk</legend>
    <div class="o-grid">
      <div class="o-grid__row">
        <div class="o-grid__box o-grid__box--full">
          <div class="c-form__element">
            <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search york.ac.uk">
            <input type="hidden" name="site" value="yorkweb">
            <a class="c-btn c-btn--medium js-submit-form" href="#" role="button">Search</a>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</form>
```

## Various navigation

### Sticky nav

The sticky nav stays in place on the page until it hits the top of the screen, at which point it stays fixed to the top, highlighting the nearest section fragment as it goes.

<div class="c-nav__wrapper">
  <nav class="c-nav c-nav--sticky js-sticky-nav js-targeted-nav">
    <ul class="c-nav__list"><li class="c-nav__item"><a class="c-nav__link" href="#sticky-nav">Sticky nav</a></li><li class="c-nav__item"><a class="c-nav__link" href="#utility-navigation">Utility nav</a></li><li class="c-nav__item"><a class="c-nav__link" href="#page-title">Page title</a></li><li class="c-nav__item"><a class="c-nav__link" href="#menu-navigation">Menu nav</a></li><li class="c-nav__item"><a class="c-nav__link" href="#breadcrumb-navigation">Breadcrumb</a></li><li class="c-nav__item"><a class="c-nav__link" href="#putting-it-all-together">Putting it all together</a></li></ul>
  </nav>
</div>

```markup
<div class="c-nav__wrapper">
  <nav class="c-nav c-nav--sticky js-sticky-nav js-targeted-nav">
    <ul class="c-nav__list"><li class="c-nav__item"><a class="c-nav__link" href="#sticky-navigation">Sticky nav</a></li><li class="c-nav__item"><a class="c-nav__link" href="#utility-navigation">Utility nav</a></li><li class="c-nav__item"><a class="c-nav__link" href="#page-title">Page title</a></li><li class="c-nav__item"><a class="c-nav__link" href="#menu-navigation">Menu nav</a></li><li class="c-nav__item"><a class="c-nav__link" href="#breadcrumb-navigation">Breadcrumb</a></li><li class="c-nav__item"><a class="c-nav__link" href="#putting-it-all-together">Putting it all together</a></li></ul>
  </nav>
</div>
```

### Utility navigation

**Utility navigation** is links that aren't directly related to page content, but are important for general site navigation. This includes _Jobs_, _Staff and students_, _Alumni_ and a general _A-Z_ listing. These are kept in a top banner on the homepage but hidden elsewhere.

<nav class="c-utility-nav" role="navigation" aria-label="Utility navigation">
  <ul class="c-utility-nav__list" role="menubar" aria-hidden="false">
    <li class="c-utility-nav__item c-utility-nav__item--parent" id="staff-and-students" role="menuitem" aria-haspopup="true">
      <a class="c-utility-nav__link js-utility-toggle" href="#staff-and-students">Staff<span class="is-hidden@tiny-"> and </span><span class="is-hidden@small+">/</span>students</a>
      <div class="c-utility-nav__subnav" aria-hidden="true" role="menu">
        <ul class="c-utility-nav__sublist">
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Staff homepage</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Student homepage</a></li>
        </ul>
        <ul class="c-utility-nav__sublist">
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Term dates</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Timetables</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Library</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Yorkshare VLE</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">e:Vision</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Directory</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Email</a></li>
        </ul>
      </div>
    </li>
    <li class="c-utility-nav__item c-utility-nav__item--parent" id="a-to-z" role="menuitem" aria-haspopup="true">
      <a class="c-utility-nav__link js-utility-toggle" href="#a-to-z">A-Z</a>
      <div class="c-utility-nav__subnav" aria-hidden="true" role="menu">
        <ul class="c-utility-nav__sublist">
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Undergraduate courses</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Postgraduate courses</a></li>
        </ul>
        <ul class="c-utility-nav__sublist">
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Departments and centres</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Support services</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Staff directory</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Maps and directions</a></li>
        </ul>
        <ul class="c-utility-nav__sublist">
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Full A-Z</a></li>
        </ul>
      </div>
    </li>
    <li class="c-utility-nav__item" role="menuitem" aria-haspopup="false"><a class="c-utility-nav__link" href="#">Jobs</a></li>
    <li class="c-utility-nav__item" role="menuitem" aria-haspopup="false"><a class="c-utility-nav__link" href="#">Alumni</a></li>
    <li class="c-utility-nav__item" role="menuitem" aria-haspopup="false"><a class="c-utility-nav__link" href="https://www.york.ac.uk/global/globalpartnerships/europe-campus-city-college/">Europe Campus</a></li>
  </ul>
</nav>

```markup
<nav class="c-utility-nav js-accessible-nav" role="navigation" aria-label="Utility navigation">
  <ul class="c-utility-nav__list" role="menubar" aria-hidden="false">
    <li class="c-utility-nav__item c-utility-nav__item--parent" id="staff-and-students" role="menuitem" aria-haspopup="true">
      <a class="c-utility-nav__link js-utility-toggle" href="#staff-and-students">Staff<span class="is-hidden@tiny-"> and </span><span class="is-hidden@small+">/</span>students</a>
      <div class="c-utility-nav__subnav" aria-hidden="true" role="menu">
        <ul class="c-utility-nav__sublist">
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Staff homepage</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Student homepage</a></li>
        </ul>
        <ul class="c-utility-nav__sublist">
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Term dates</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Timetables</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Library</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Yorkshare VLE</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">e:Vision</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Directory</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Email</a></li>
        </ul>
      </div>
    </li>
    <li class="c-utility-nav__item c-utility-nav__item--parent" id="a-to-z" role="menuitem" aria-haspopup="true">
      <a class="c-utility-nav__link js-utility-toggle" href="#a-to-z">A-Z</a>
      <div class="c-utility-nav__subnav" aria-hidden="true" role="menu">
        <ul class="c-utility-nav__sublist">
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Undergraduate courses</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Postgraduate courses</a></li>
        </ul>
        <ul class="c-utility-nav__sublist">
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Departments and centres</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Support services</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Staff directory</a></li>
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Maps and directions</a></li>
        </ul>
        <ul class="c-utility-nav__sublist">
          <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="#" tabindex="-1">Full A-Z</a></li>
        </ul>
      </div>
    </li>
    <li class="c-utility-nav__item" role="menuitem" aria-haspopup="false"><a class="c-utility-nav__link" href="#">Jobs</a></li>
    <li class="c-utility-nav__item" role="menuitem" aria-haspopup="false"><a class="c-utility-nav__link" href="#">Alumni</a></li>
    <li class="c-utility-nav__item" role="menuitem" aria-haspopup="false"><a class="c-utility-nav__link" href="https://www.york.ac.uk/global/globalpartnerships/europe-campus-city-college/">Europe Campus</a></li>
  </ul>
</nav>
```

## Main menu

The selected level 2 title will appear in larger text (this will be something like _Postgraduate Study_, or _Chemistry_). This means that the other Level 2 navigation won't be immediately clickable, which is intentional: if you've gone to Undergraduate study, you're unlikely to need Postgraduate study as well, if you're looking at Chemistry you're unlikely to need Archaeology as well.

### Page title

<div class="c-page-title">
  <p class="c-page-title__header"><a class="c-page-title__link" href="#">Navigation</a></p>
</div>

```markup
<div class="c-page-title">
  <p class="c-page-title__header"><a class="c-page-title__link" href="#">Navigation</a></p>
</div>
```

### Menu navigation

Unopened, the main navigation shows the pages currently in this section. Open it up and you can see the "In this section" and "Other sections".

<nav class="c-nav c-nav--main" role="navigation" id="Main-Navigation-2">
  <h4 class="c-nav__header">In this section</h4>
  <ul class="c-nav__list c-nav__list--structural">
    <li class="c-nav__item"><a href="#">Courses</a></li><li class="c-nav__item"><a href="#">Applying</a></li><li class="c-nav__item"><a href="#">Open days and visits</a></li><li class="c-nav__item"><a href="#">Student finance</a></li><li class="c-nav__item"><a href="#">Accommodation</a></li><li class="c-nav__item"><a href="#">Study and work abroad</a></li><li class="c-nav__item"><a href="#">Careers and skills</a></li><li class="c-nav__item"><a href="#">Prospectus</a></li><li class="c-nav__item c-nav__item--more"><a class="c-nav__link js-toggle-button" href="#Main-Navigation-2">More…</a></li>
  </ul>
  <h4 class="c-nav__header">All sections</h4>
  <ul class="c-nav__list c-nav__list--associative">
    <li class="c-nav__item"><span class="currentbranch0"><a href="#">Undergraduate study</a></span><ul class="multilevel-linkul-0">
<li><a href="/study/undergraduate/applying/entry/english-language/">English language requirements</a></li><li><a href="/study/undergraduate/applying/entry/a-level-reforms/">Statement on qualifications reform</a></li><li><a href="/study/undergraduate/applying/entry/policies/">Admissions policy</a></li><li><a href="/study/undergraduate/applying/entry/prior-learning/">Credit transfer and recognition of prior learning</a></li></ul></li><li class="c-nav__item"><a href="#">Postgraduate study</a></li><li class="c-nav__item"><a href="#">International students</a></li><li class="c-nav__item"><a href="#">Accommodation</a></li><li class="c-nav__item"><a href="#">Student life</a></li><li class="c-nav__item"><a href="#">Careers and skills</a></li>
  </ul>
</nav>

```markup
<nav class="c-nav c-nav--main" role="navigation" id="Main-Navigation-2">
  <h4 class="c-nav__header">In this section</h4>
  <ul class="c-nav__list c-nav__list--structural">
    <li class="c-nav__item"><a href="#">Courses</a></li><li class="c-nav__item"><a href="#">Applying</a></li><li class="c-nav__item"><a href="#">Open days and visits</a></li><li class="c-nav__item"><a href="#">Student finance</a></li><li class="c-nav__item"><a href="#">Accommodation</a></li><li class="c-nav__item"><a href="#">Study and work abroad</a></li><li class="c-nav__item"><a href="#">Careers and skills</a></li><li class="c-nav__item"><a href="#">Prospectus</a></li><li class="c-nav__item c-nav__item--more"><a class="c-nav__link js-toggle-button" href="#Main-Navigation-2">More…</a></li>
  </ul>
  <h4 class="c-nav__header">All sections</h4>
  <ul class="c-nav__list c-nav__list--associative">
    <li class="c-nav__item"><span class="currentbranch0"><a href="#">Undergraduate study</a></span><ul class="multilevel-linkul-0">
<li><a href="/study/undergraduate/applying/entry/english-language/">English language requirements</a></li><li><a href="/study/undergraduate/applying/entry/a-level-reforms/">Statement on qualifications reform</a></li><li><a href="/study/undergraduate/applying/entry/policies/">Admissions policy</a></li><li><a href="/study/undergraduate/applying/entry/prior-learning/">Credit transfer and recognition of prior learning</a></li></ul></li><li class="c-nav__item"><a href="#">Postgraduate study</a></li><li class="c-nav__item"><a href="#">International students</a></li><li class="c-nav__item"><a href="#">Accommodation</a></li><li class="c-nav__item"><a href="#">Student life</a></li><li class="c-nav__item"><a href="#">Careers and skills</a></li>
  </ul>
</nav>
```

### Breadcrumb navigation

<div class="c-breadcrumb">
  <div class="c-breadcrumb__items">
    <a href="#"><i class="c-icon c-icon--home"></i></a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Study at York</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Undergraduate study</a>
  </div>
</div>

```markup
<div class="c-breadcrumb">
  <div class="c-breadcrumb__items">
    <a href="#"><i class="c-icon c-icon--home"></i></a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Study at York</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Undergraduate study</a>
  </div>
</div>
```
## Putting it all together

### On the homepage

<header class="c-main-header" role="banner">
  <div class="o-wrapper o-grid">
    <div class="o-grid__row">
      <div class="o-grid__box o-grid__box--full">
        <nav class="c-utility-nav" role="navigation" aria-label="Utility navigation">
          <ul class="c-utility-nav__list" role="menubar" aria-hidden="false">
            <li class="c-utility-nav__item c-utility-nav__item--parent" id="staff-and-students-2" role="menuitem" aria-haspopup="true">
              <a class="c-utility-nav__link js-utility-toggle" href="#staff-and-students-2">Staff<span class="is-hidden@tiny-"> and </span><span class="is-hidden@small+">/</span>students</a>
              <div class="c-utility-nav__subnav" aria-hidden="true" role="menu">
                <ul class="c-utility-nav__sublist">
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/staff/" tabindex="-1">Staff homepage</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/students/" tabindex="-1">Student homepage</a></li>
                </ul>
                <ul class="c-utility-nav__sublist">
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/about/term-dates/" tabindex="-1">Term dates</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/viewtimetables" tabindex="-1">Timetables</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/library/" tabindex="-1">Library</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://vle.york.ac.uk/" tabindex="-1">Yorkshare VLE</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://evision.york.ac.uk/" tabindex="-1">e:Vision</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/directory/" tabindex="-1">Directory</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://mail.york.ac.uk/" tabindex="-1">Email</a></li>
                </ul>
              </div>
            </li>
            <li class="c-utility-nav__item c-utility-nav__item--parent" id="a-to-z-2" role="menuitem" aria-haspopup="true">
              <a class="c-utility-nav__link js-utility-toggle" href="#a-to-z-2">A-Zs</a>
              <div class="c-utility-nav__subnav" aria-hidden="true" role="menu">
                <ul class="c-utility-nav__sublist">
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/study/undergraduate/courses/all" tabindex="-1">Undergraduate courses</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/study/postgraduate/courses/all" tabindex="-1">Postgraduate courses</a></li>
                </ul>
                <ul class="c-utility-nav__sublist">
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/about/departments/academic/" tabindex="-1">Departments and centres</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/colleges/" tabindex="-1">Colleges</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/about/departments/support-and-admin/" tabindex="-1">Support services</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/directory/" tabindex="-1">Staff directory</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/about/maps/" tabindex="-1">Maps and directions</a></li>
                </ul>
                <ul class="c-utility-nav__sublist">
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/about/departments/a-to-z/" tabindex="-1">Full A-Z</a></li>
                </ul>
              </div>
            </li>
            <li class="c-utility-nav__item" role="menuitem" aria-haspopup="false"><a class="c-utility-nav__link" href="https://jobs.york.ac.uk/">Jobs</a></li>
            <li class="c-utility-nav__item" role="menuitem" aria-haspopup="false"><a class="c-utility-nav__link" href="https://www.yorkspace.net/">Alumni</a></li>
            <li class="c-utility-nav__item" role="menuitem" aria-haspopup="false"><a class="c-utility-nav__link" href="https://www.york.ac.uk/global/globalpartnerships/europe-campus-city-college/">Europe Campus</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="o-grid__row">
      <div class="o-grid__box o-grid__box--threequarters o-grid__box--threequarters@medium o-grid__box--threequarters@small o-grid__box--threequarters@tiny">
        <h2 class="c-main-header__title"><a href="https://www.york.ac.uk/"><img class="c-main-header__logo" src="https://www.york.ac.uk/static/stable/img/logo.svg" alt="University of York"></a></h2>
      </div>
      <div class="o-grid__box o-grid__box--quarter o-grid__box--quarter@medium o-grid__box--quarter@small o-grid__box--quarter@tiny">
        <form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--header is-hidden@medium-">
          <fieldset>
            <div class="c-form__element">
              <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search york.ac.uk" />
              <input type="hidden" name="site" value="yorkweb">
              <a class="c-btn c-btn--medium js-submit-form" href="https://www.york.ac.uk/search" role="button"><i class="c-icon c-icon--search"></i></a>
            </div>
          </fieldset>
        </form>
        <!-- Mobile search -->
        <a href="#Mobile-Search-3" class="c-mobile-search-button js-toggle-button is-hidden@large+"><i class="c-icon c-icon--search"></i></a>
      </div>
    </div>
  </div>
</header><form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--mobile-search" id="Mobile-Search-3">
  <fieldset class="c-form__fieldset">
    <legend class="c-form__legend">Search york.ac.uk</legend>
    <div class="o-grid">
      <div class="o-grid__row">
        <div class="o-grid__box o-grid__box--full">
          <div class="c-form__element">
            <input class="c-form__input c-form__input--text" type="text" id="q-mobile" name="q" />
            <input type="hidden" name="site" value="yorkweb">
            <a class="c-btn c-btn--medium js-submit-form" href="https://www.york.ac.uk/search" role="button">Search</a>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</form><nav class="c-nav c-nav--main" role="navigation" id="Main-Navigation-3">
  <ul class="c-nav__list c-nav__list--structural">
    <li class="c-nav__item"><a href="https://www.york.ac.uk/study/">Study</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/research/">Research</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/business/">Business</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/about">About</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/global/">International</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/news-and-events/news/">News</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/news-and-events/events">Events</a></li>
    <li class="c-nav__item c-nav__item--more"><a class="c-nav__link js-toggle-button" href="#Main-Navigation-3">More&hellip;</a></li>
  </ul>
  <h4 class="c-nav__header">Staff and students</h4>
  <ul class="c-nav__list c-nav__list--associative">
    <li class="c-nav__item"><a href="https://www.york.ac.uk/staff/">Staff homepage</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/students/">Student homepage</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/about/term-dates/">Term dates</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/viewtimetables">Timetables</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/library/">Library</a></li>
    <li class="c-nav__item"><a href="https://vle.york.ac.uk/">Yorkshare VLE</a></li>
    <li class="c-nav__item"><a href="https://evision.york.ac.uk/">e:Vision</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/directory/">Directory</a></li>
    <li class="c-nav__item"><a href="https://mail.york.ac.uk/">Email</a></li>
  </ul>
  <h4 class="c-nav__header">A-Zs</h4>
  <ul class="c-nav__list c-nav__list--associative">
    <li class="c-nav__item"><a href="https://www.york.ac.uk/study/undergraduate/courses/all">Undergraduate courses</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/study/postgraduate/courses/all">Postgraduate courses</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/about/departments/academic/">Departments and centres</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/colleges/">Colleges</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/about/departments/support-and-admin/">Support services</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/directory/">Staff directory</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/about/maps/">Maps and directions</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/about/departments/a-to-z/">Full A-Z</a></li>
  </ul>
</nav>

```markup
<header class="c-main-header" role="banner">
  <div class="o-wrapper o-grid">
    <div class="o-grid__row">
      <div class="o-grid__box o-grid__box--full">
        <nav class="c-utility-nav" role="navigation" aria-label="Utility navigation">
          <ul class="c-utility-nav__list" role="menubar" aria-hidden="false">
            <li class="c-utility-nav__item c-utility-nav__item--parent" id="staff-and-students-2" role="menuitem" aria-haspopup="true">
              <a class="c-utility-nav__link js-utility-toggle" href="#staff-and-students-2">Staff<span class="is-hidden@tiny-"> and </span><span class="is-hidden@small+">/</span>students</a>
              <div class="c-utility-nav__subnav" aria-hidden="true" role="menu">
                <ul class="c-utility-nav__sublist">
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/staff/" tabindex="-1">Staff homepage</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/students/" tabindex="-1">Student homepage</a></li>
                </ul>
                <ul class="c-utility-nav__sublist">
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/about/term-dates/" tabindex="-1">Term dates</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/viewtimetables" tabindex="-1">Timetables</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/library/" tabindex="-1">Library</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://vle.york.ac.uk/" tabindex="-1">Yorkshare VLE</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://evision.york.ac.uk/" tabindex="-1">e:Vision</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/directory/" tabindex="-1">Directory</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://mail.york.ac.uk/" tabindex="-1">Email</a></li>
                </ul>
              </div>
            </li>
            <li class="c-utility-nav__item c-utility-nav__item--parent" id="a-to-z-2" role="menuitem" aria-haspopup="true">
              <a class="c-utility-nav__link js-utility-toggle" href="#a-to-z-2">A-Zs</a>
              <div class="c-utility-nav__subnav" aria-hidden="true" role="menu">
                <ul class="c-utility-nav__sublist">
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/study/undergraduate/courses/all" tabindex="-1">Undergraduate courses</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/study/postgraduate/courses/all" tabindex="-1">Postgraduate courses</a></li>
                </ul>
                <ul class="c-utility-nav__sublist">
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/about/departments/academic/" tabindex="-1">Departments and centres</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/colleges/" tabindex="-1">Colleges</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/about/departments/support-and-admin/" tabindex="-1">Support services</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/directory/" tabindex="-1">Staff directory</a></li>
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/about/maps/" tabindex="-1">Maps and directions</a></li>
                </ul>
                <ul class="c-utility-nav__sublist">
                  <li class="c-utility-nav__subitem" role="menuitem"><a class="c-utility-nav__sublink" href="https://www.york.ac.uk/about/departments/a-to-z/" tabindex="-1">Full A-Z</a></li>
                </ul>
              </div>
            </li>
            <li class="c-utility-nav__item" role="menuitem" aria-haspopup="false"><a class="c-utility-nav__link" href="https://jobs.york.ac.uk/">Jobs</a></li>
            <li class="c-utility-nav__item" role="menuitem" aria-haspopup="false"><a class="c-utility-nav__link" href="https://www.yorkspace.net/">Alumni</a></li>
            <li class="c-utility-nav__item" role="menuitem" aria-haspopup="false"><a class="c-utility-nav__link" href="https://www.york.ac.uk/global/globalpartnerships/europe-campus-city-college/">Europe Campus</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="o-grid__row">
      <div class="o-grid__box o-grid__box--threequarters o-grid__box--threequarters@medium o-grid__box--threequarters@small o-grid__box--threequarters@tiny">
        <h2 class="c-main-header__title"><a href="https://www.york.ac.uk/"><img class="c-main-header__logo" src="https://www.york.ac.uk/static/stable/img/logo.svg" alt="University of York"></a></h2>
      </div>
      <div class="o-grid__box o-grid__box--quarter o-grid__box--quarter@medium o-grid__box--quarter@small o-grid__box--quarter@tiny">
        <form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--header is-hidden@medium-">
          <fieldset>
            <div class="c-form__element">
              <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search york.ac.uk" />
              <input type="hidden" name="site" value="yorkweb">
              <a class="c-btn c-btn--medium js-submit-form" href="https://www.york.ac.uk/search" role="button"><i class="c-icon c-icon--search"></i></a>
            </div>
          </fieldset>
        </form>
        <!-- Mobile search -->
        <a href="#Mobile-Search-4" class="c-mobile-search-button js-toggle-button is-hidden@large+"><i class="c-icon c-icon--search"></i></a>
      </div>
    </div>
  </div>
</header>
<form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--mobile-search" id="Mobile-Search-4">
  <fieldset class="c-form__fieldset">
    <legend class="c-form__legend">Search york.ac.uk</legend>
    <div class="o-grid">
      <div class="o-grid__row">
        <div class="o-grid__box o-grid__box--full">
          <div class="c-form__element">
            <input class="c-form__input c-form__input--text" type="text" id="q-mobile" name="q" />
            <input type="hidden" name="site" value="yorkweb">
            <a class="c-btn c-btn--medium js-submit-form" href="https://www.york.ac.uk/search" role="button">Search</a>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</form>
<nav class="c-nav c-nav--main" role="navigation" id="Main-Navigation-3">
  <ul class="c-nav__list c-nav__list--structural">
    <li class="c-nav__item"><a href="https://www.york.ac.uk/study/">Study</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/research/">Research</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/business/">Business</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/about">About</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/global/">International</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/news-and-events/news/">News</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/news-and-events/events">Events</a></li>
    <li class="c-nav__item c-nav__item--more"><a class="c-nav__link js-toggle-button" href="#Main-Navigation-3">More&hellip;</a></li>
  </ul>
  <h4 class="c-nav__header">Staff and students</h4>
  <ul class="c-nav__list c-nav__list--associative">
    <li class="c-nav__item"><a href="https://www.york.ac.uk/staff/">Staff homepage</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/students/">Student homepage</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/about/term-dates/">Term dates</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/viewtimetables">Timetables</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/library/">Library</a></li>
    <li class="c-nav__item"><a href="https://vle.york.ac.uk/">Yorkshare VLE</a></li>
    <li class="c-nav__item"><a href="https://evision.york.ac.uk/">e:Vision</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/directory/">Directory</a></li>
    <li class="c-nav__item"><a href="https://mail.york.ac.uk/">Email</a></li>
  </ul>
  <h4 class="c-nav__header">A-Zs</h4>
  <ul class="c-nav__list c-nav__list--associative">
    <li class="c-nav__item"><a href="https://www.york.ac.uk/study/undergraduate/courses/all">Undergraduate courses</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/study/postgraduate/courses/all">Postgraduate courses</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/about/departments/academic/">Departments and centres</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/colleges/">Colleges</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/about/departments/support-and-admin/">Support services</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/directory/">Staff directory</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/about/maps/">Maps and directions</a></li>
    <li class="c-nav__item"><a href="https://www.york.ac.uk/about/departments/a-to-z/">Full A-Z</a></li>
  </ul>
</nav>
```

### Other pages

<header class="c-main-header" role="banner">
  <div class="o-wrapper o-grid">
    <div class="o-grid__row">
      <div class="o-grid__box o-grid__box--threequarters o-grid__box--threequarters@medium o-grid__box--threequarters@small o-grid__box--threequarters@tiny">
        <h2 class="c-main-header__title"><a class="c-main-header__link" href="https://www.york.ac.uk"><img class="c-main-header__logo" src="https://www.york.ac.uk/static/stable/img/logo.svg" alt="University of York logo"></a></h2>
      </div>
      <div class="o-grid__box o-grid__box--quarter o-grid__box--quarter@medium o-grid__box--quarter@small o-grid__box--quarter@tiny">
        <form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--header">
          <fieldset>
            <div class="c-form__element">
              <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search york.ac.uk" />
              <input type="hidden" name="site" value="yorkweb">
              <a class="c-btn c-btn--medium js-submit-form" href="https://www.york.ac.uk/search" role="button"><i class="c-icon c-icon--search"></i></a>
            </div>
          </fieldset>
        </form>
        <a href="#Mobile-Search-5" class="c-mobile-search-button js-toggle-button"><i class="c-icon c-icon--search"></i></a>
      </div>
    </div>
  </div>
</header><form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--mobile-search" id="Mobile-Search-5">
  <fieldset class="c-form__fieldset">
    <legend class="c-form__legend">Search york.ac.uk</legend>
    <div class="o-grid">
      <div class="o-grid__row">
        <div class="o-grid__box o-grid__box--full">
          <div class="c-form__element">
            <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search york.ac.uk">
            <input type="hidden" name="site" value="yorkweb">
            <a class="c-btn c-btn--medium js-submit-form" href="#" role="button">Search</a>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</form>
<div class="o-wrapper o-wrapper--wide c-page-title__wrapper o-grid">
  <div class="o-grid__row">
    <div class="o-grid__box o-grid__box--full">
      <div class="c-page-title">
        <p class="c-page-title__header"><a class="c-page-title__link" href="#">Navigation</a></p>
      </div>
    </div>
  </div>
</div><nav class="c-nav c-nav--main" role="navigation" id="Main-Navigation-4">
  <h4 class="c-nav__header">In this section</h4>
  <ul class="c-nav__list c-nav__list--structural">
    <li class="c-nav__item"><a href="#">Courses</a></li><li class="c-nav__item"><a href="#">Applying</a></li><li class="c-nav__item"><a href="#">Open days and visits</a></li><li class="c-nav__item"><a href="#">Student finance</a></li><li class="c-nav__item"><a href="#">Accommodation</a></li><li class="c-nav__item"><a href="#">Study and work abroad</a></li><li class="c-nav__item"><a href="#">Careers and skills</a></li><li class="c-nav__item"><a href="#">Prospectus</a></li><li class="c-nav__item c-nav__item--more"><a class="c-nav__link js-toggle-button" href="#Main-Navigation-4">More…</a></li>
  </ul>
  <h4 class="c-nav__header">All sections</h4>
  <ul class="c-nav__list c-nav__list--associative">
    <li class="c-nav__item"><span class="currentbranch0"><a href="#">Undergraduate study</a></span></li><li class="c-nav__item"><a href="#">Postgraduate study</a></li><li class="c-nav__item"><a href="#">International students</a></li><li class="c-nav__item"><a href="#">Accommodation</a></li><li class="c-nav__item"><a href="#">Student life</a></li><li class="c-nav__item"><a href="#">Careers and skills</a></li>
  </ul>
</nav>
<div class="c-breadcrumb">
  <div class="c-breadcrumb__items">
    <a href="#"><i class="c-icon c-icon--home"></i></a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Study at York</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Undergraduate study</a>
  </div>
</div>

```markup
<header class="c-main-header" role="banner">
  <div class="o-wrapper o-grid">
    <div class="o-grid__row">
      <div class="o-grid__box o-grid__box--threequarters o-grid__box--threequarters@medium o-grid__box--threequarters@small o-grid__box--threequarters@tiny">
        <h2 class="c-main-header__title"><a class="c-main-header__link" href="https://www.york.ac.uk"><img class="c-main-header__logo" src="https://www.york.ac.uk/static/stable/img/logo.svg" alt="University of York logo"></a></h2>
      </div>
      <div class="o-grid__box o-grid__box--quarter o-grid__box--quarter@medium o-grid__box--quarter@small o-grid__box--quarter@tiny">
        <form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--header">
          <fieldset>
            <div class="c-form__element">
              <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search york.ac.uk" />
              <input type="hidden" name="site" value="yorkweb">
              <a class="c-btn c-btn--medium js-submit-form" href="https://www.york.ac.uk/search" role="button"><i class="c-icon c-icon--search"></i></a>
            </div>
          </fieldset>
        </form>
        <a href="#Mobile-Search-6" class="c-mobile-search-button js-toggle-button"><i class="c-icon c-icon--search"></i></a>
      </div>
    </div>
  </div>
</header>
<form action="https://www.york.ac.uk/search" method="get" class="c-form c-form--joined c-form--mobile-search" id="Mobile-Search-6">
  <fieldset class="c-form__fieldset">
    <legend class="c-form__legend">Search york.ac.uk</legend>
    <div class="o-grid">
      <div class="o-grid__row">
        <div class="o-grid__box o-grid__box--full">
          <div class="c-form__element">
            <input class="c-form__input c-form__input--text" type="text" id="q" name="q" placeholder="Search york.ac.uk">
            <input type="hidden" name="site" value="yorkweb">
            <a class="c-btn c-btn--medium js-submit-form" href="#" role="button">Search</a>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</form>
<div class="o-wrapper o-wrapper--wide c-page-title__wrapper o-grid">
  <div class="o-grid__row">
    <div class="o-grid__box o-grid__box--full">
      <div class="c-page-title">
        <p class="c-page-title__header"><a class="c-page-title__link" href="#">Navigation</a></p>
      </div>
    </div>
  </div>
</div>
<nav class="c-nav c-nav--main" role="navigation" id="Main-Navigation-4">
  <h4 class="c-nav__header">In this section</h4>
  <ul class="c-nav__list c-nav__list--structural">
    <li class="c-nav__item"><a href="#">Courses</a></li><li class="c-nav__item"><a href="#">Applying</a></li><li class="c-nav__item"><a href="#">Open days and visits</a></li><li class="c-nav__item"><a href="#">Student finance</a></li><li class="c-nav__item"><a href="#">Accommodation</a></li><li class="c-nav__item"><a href="#">Study and work abroad</a></li><li class="c-nav__item"><a href="#">Careers and skills</a></li><li class="c-nav__item"><a href="#">Prospectus</a></li><li class="c-nav__item c-nav__item--more"><a class="c-nav__link js-toggle-button" href="#Main-Navigation-4">More…</a></li>
  </ul>
  <h4 class="c-nav__header">All sections</h4>
  <ul class="c-nav__list c-nav__list--associative">
    <li class="c-nav__item"><span class="currentbranch0"><a href="#">Undergraduate study</a></span></li><li class="c-nav__item"><a href="#">Postgraduate study</a></li><li class="c-nav__item"><a href="#">International students</a></li><li class="c-nav__item"><a href="#">Accommodation</a></li><li class="c-nav__item"><a href="#">Student life</a></li><li class="c-nav__item"><a href="#">Careers and skills</a></li>
  </ul>
</nav>
<div class="c-breadcrumb">
  <div class="c-breadcrumb__items">
    <a href="#"><i class="c-icon c-icon--home"></i></a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Study at York</a><span class="c-breadcrumb__separator">&gt;</span><a href="#">Undergraduate study</a>
  </div>
</div>
```

<div class="c-alert c-alert--warning">
**N.B. Navigation doesn't use the component library**
</div>
