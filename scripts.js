// 切换主题函数
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    body.classList.toggle('dark-theme');
    // 根据当前主题切换背景色和文字颜色
    if (currentTheme === 'dark-theme') {
      body.style.backgroundColor = '#f0f0f0';
      body.style.color = '#333';
    } else {
      body.style.backgroundColor = '#333';
      body.style.color = '#f0f0f0';
    }
  }
  
  // 切换语言函数
function toggleLang() {
  const langToggle = document.querySelector('.lang-toggle');
  const currentLang = langToggle.textContent.trim();
  
  // 根据当前语言切换
  if (currentLang === '中文') {
    // 切换成英文
    langToggle.textContent = 'English';
    updateContent('intro', 'My name is Lim Zhong Qing');
    updateContent('cert', 'Certificates');
    updateContent('skills', 'Skills');
  } else {
    // 切换成中文
    langToggle.textContent = '中文';
    updateContent('intro', '我叫Lim Zhong Qing');
    updateContent('cert', '证书');
    updateContent('skills', '技能');
  }
}

// 更新内容函数
function updateContent(sectionId, title) {
  const section = document.getElementById(sectionId);
  const heading = section.querySelector('h3');
  if (heading) {
    heading.textContent = title;
  } else {
    console.error(`Cannot find heading element in section ${sectionId}`);
  }
}
