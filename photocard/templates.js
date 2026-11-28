export const templates = [
  {
    id: 'classic',
    name: 'Classic Newspaper',
    description: 'A traditional layout with a large image and bottom text area.',
    defaults: {
      accentColor: '#D9232D',
      bgColor: '#ffffff',
      textColor: '#111827',
      heading: 'সন্ধ্যার সংবাদ',
      subheading: 'আজকের গুরুত্বপূর্ণ সব খবর, এক নজরে দেখে নিন।',
      date: '12 December 2026',
      domain: 'example.com'
    },
    html: `
      <div class="template-wrapper classic-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="image-area">
          <img src="{image}" alt="Main Photo" class="main-photo" />
          <div class="overlay">
            <p class="subheading" style="color: #ffffff;">{subheading}</p>
          </div>
        </div>
        <div class="content-area">
          <div class="accent-bar"></div>
          <div class="header-row">
            <h1 class="heading">{heading}</h1>
          </div>
          <div class="footer-row">
            <div class="date-pill">{date}</div>
            <div class="logo-area">
              <div class="logo-wrapper">
                <img src="{logo}" class="logo" />
              </div>
            </div>
            <div class="domain-pill">{domain}</div>
          </div>
        </div>
        <div class="ad-container">
          <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.classic-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
        overflow: hidden;
        position: relative;
      }
      
      .classic-theme .ad-container {
        display: none;
      }

      .classic-theme.has-ad .ad-container {
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f3f4f6;
        flex: 0 0 auto;
      }
      
      .classic-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      .classic-theme .image-area {
        width: 100%;
        flex: 1;
        min-height: 0;
        position: relative;
        overflow: hidden;
      }
      
      .classic-theme .main-photo {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .classic-theme .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
        padding: 40px 50px;
        display: flex;
        align-items: flex-end;
      }
      
      .classic-theme .subheading {
        font-size: 32px;
        margin: 0;
        font-weight: 500;
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
      }
      
      .classic-theme .content-area {
        height: 430px;
        flex: 0 0 auto;
        padding: 0;
        position: relative;
        display: flex;
        flex-direction: column;
      }
      
      .classic-theme .accent-bar {
        height: 8px;
        width: 100%;
        background-color: var(--accent);
      }
      
      .classic-theme .header-row {
        padding: 40px 50px;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      
      .classic-theme .heading {
        font-size: 64px;
        line-height: 1.2;
        margin: 0;
        color: var(--text);
        font-weight: 700;
      }
      
      .classic-theme .footer-row {
        padding: 0 50px 40px;
        display: flex;
        align-items: end;
      }
      .classic-theme .logo-area {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
      }
      .classic-theme .logo-wrapper {
        width: 140px;
        height: 140px;
        background: white;
        border-radius: 50%;
        padding: 0;
        border: 4px solid var(--accent);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      
      .classic-theme .logo {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }

      .classic-theme .date-pill, .classic-theme .domain-pill, .classic-theme .logo-area  {
        flex: 1;
      }
      
      .classic-theme .date-pill, .classic-theme .domain-pill {
        font-size: 24px;
        color: var(--text);
        opacity: 0.7;
        font-weight: 500;
      }

      .classic-theme .domain-pill {
        text-align: right;
      }
    `
  },
  {
    id: 'modern',
    name: 'Modern Bold',
    description: 'A bold, high-contrast design with large typography.',
    defaults: {
      accentColor: '#2563eb',
      bgColor: '#ffffff',
      textColor: '#1f2937'
    },
    html: `
      <div class="template-wrapper modern-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="top-half">
           <div class="logo-badge">
              <img src="{logo}" />
           </div>
           <img src="{image}" class="hero-image" />
        </div>
        <div class="bottom-half">
           <div class="meta-line">
              <span class="date">{date}</span>
              <span class="separator">•</span>
              <span class="source">News Update</span>
           </div>
           <h1 class="headline">{heading}</h1>
           <p class="summary">{subheading}</p>
           <div class="read-more-btn" style="background: var(--accent)">বিস্তারিত পড়ুন</div>
        </div>
        <div class="ad-container">
          <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.modern-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
        overflow: hidden;
      }
      
      .modern-theme .ad-container {
        display: none;
      }

      .modern-theme.has-ad .ad-container {
        margin-top: auto;
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0 0 auto;
      }
      
      .modern-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      .modern-theme .top-half {
        flex: 1;
        min-height: 0;
        position: relative;
        overflow: hidden;
      }
      
      .modern-theme .hero-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .modern-theme .logo-badge {
        position: absolute;
        top: 40px;
        left: 40px;
        max-width: 100px;
        max-height: 100px;
        background: white;
        padding: 0;
        border: 4px solid white;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 10;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .modern-theme .logo-badge img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
      }
      
      .modern-theme .bottom-half {
        height: 486px;
        flex: 0 0 auto;
        padding: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: var(--bg);
      }
      
      .modern-theme .meta-line {
        font-size: 24px;
        color: var(--accent);
        font-weight: 700;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      
      .modern-theme .separator { margin: 0 10px; color: var(--text); opacity: 0.4; }
      
      .modern-theme .headline {
        font-size: 72px;
        line-height: 1.1;
        color: var(--text);
        margin: 0 0 30px 0;
        font-weight: 800;
      }
      
      .modern-theme .summary {
        font-size: 32px;
        color: var(--text);
        opacity: 0.8;
        margin: 0 0 40px 0;
        line-height: 1.4;
      }
      
      .modern-theme .read-more-btn {
        align-self: flex-start;
        padding: 15px 40px;
        color: white;
        font-size: 24px;
        font-weight: 600;
        border-radius: 50px;
      }
    `
  },    
  {
    id: 'breaking',
    name: 'Breaking News',
    description: 'High impact red alert style for urgent news.',
    defaults: {
      accentColor: '#dc2626',
      bgColor: '#111111',
      textColor: '#ffffff'
    },
    html: `
      <div class="template-wrapper breaking-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="header-strip">
            <div class="breaking-label">BREAKING NEWS</div>
            <div class="live-dot"></div>
            <div class="date">{date}</div>
        </div>
        <div class="main-content">
            <div class="image-container">
                <img src="{image}" class="news-image" />
                <div class="logo-overlay">
                    <img src="{logo}" />
                </div>
            </div>
            <div class="text-content">
                <h1 class="headline">{heading}</h1>
                <div class="divider"></div>
                <p class="subhead">{subheading}</p>
            </div>
        </div>
        <div class="ticker-tape">
            <span>LIVE UPDATE • {date} • STAY TUNED FOR MORE DETAILS • BREAKING NEWS •</span>
        </div>
        <div class="ad-container">
            <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.breaking-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
        color: var(--text);
      }

      .breaking-theme .ad-container {
        display: none;
      }

      .breaking-theme.has-ad .ad-container {
        margin-top: auto;
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255,255,255,0.05);
        border-radius: 0;
        flex: 0 0 auto;
      }
      
      .breaking-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      .breaking-theme .header-strip {
        height: 80px;
        flex: 0 0 auto;
        background: var(--accent);
        display: flex;
        align-items: center;
        padding: 0 40px;
        gap: 20px;
      }

      .breaking-theme .breaking-label {
        font-size: 32px;
        font-weight: 900;
        font-style: italic;
        letter-spacing: 1px;
      }

      .breaking-theme .live-dot {
        width: 16px;
        height: 16px;
        background: white;
        border-radius: 50%;
        animation: blink 1s infinite;
      }

      @keyframes blink { 50% { opacity: 0.5; } }

      .breaking-theme .date {
        margin-left: auto;
        font-size: 24px;
        font-weight: 600;
      }

      .breaking-theme .main-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        position: relative;
        min-height: 0;
      }

      .breaking-theme .image-container {
        flex: 1;
        min-height: 0;
        width: 100%;
        overflow: hidden;
        position: relative;
      }

      .breaking-theme .news-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .breaking-theme .logo-overlay {
        position: absolute;
        top: 30px;
        right: 30px;
        max-width: 120px;
        max-height: 120px;
        background: white;
        padding: 0;
        border: 4px solid white;
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .breaking-theme .logo-overlay img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
      }

      .breaking-theme .text-content {
        padding: 50px;
        background: var(--bg);
        height: 340px;
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .breaking-theme .headline {
        font-size: 64px;
        line-height: 1.1;
        margin: 0 0 20px 0;
        color: var(--text);
        font-weight: 800;
      }

      .breaking-theme .divider {
        width: 100px;
        height: 6px;
        background: var(--accent);
        margin-bottom: 20px;
      }

      .breaking-theme .subhead {
        font-size: 32px;
        color: var(--text);
        opacity: 0.8;
        margin: 0;
        line-height: 1.4;
      }

      .breaking-theme .ticker-tape {
        height: 60px;
        flex: 0 0 auto;
        background: var(--accent);
        color: var(--text);
        display: flex;
        align-items: center;
        overflow: hidden;
        white-space: nowrap;
      }

      .breaking-theme .ticker-tape span {
        font-size: 24px;
        font-weight: 700;
        padding-left: 40px;
        text-transform: uppercase;
      }
    `
  },    
  {
    id: 'quote',
    name: 'Quote Card',
    description: 'Focus on a powerful statement with background image.',
    defaults: {
      accentColor: '#f59e0b',
      bgColor: '#000000',
      textColor: '#ffffff'
    },
    html: `
      <div class="template-wrapper quote-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="main-layout">
            <img src="{image}" class="bg-image" />
            <div class="overlay"></div>
            
            <div class="content-wrapper">
                <div class="quote-mark">“</div>
                <h1 class="quote-text">{heading}</h1>
                <div class="quote-author">
                    <div class="line"></div>
                    <p>{subheading}</p>
                </div>
            </div>

            <div class="footer">
                <div class="logo-area">
                    <img src="{logo}" />
                </div>
                <div class="date-area">{date}</div>
            </div>
        </div>
        <div class="ad-container">
            <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.quote-theme {
        width: 1080px;
        height: 1080px;
        position: relative;
        font-family: var(--font), sans-serif;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .quote-theme .main-layout {
        flex: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        min-height: 0;
      }

      .quote-theme .ad-container {
        display: none;
      }

      .quote-theme.has-ad .ad-container {
        max-height: 120px;
        height: auto;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,0.2);
        z-index: 10;
        margin-top: auto;
        flex: 0 0 auto;
      }
      
      .quote-theme .ad-container img {
        max-height: 100%;
        max-width: 100%;
        object-fit: contain;
      }

      .quote-theme .bg-image {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
      }

      .quote-theme .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        z-index: 2;
      }

      .quote-theme .content-wrapper {
        position: relative;
        z-index: 3;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 100px;
      }

      .quote-theme .quote-mark {
        font-size: 200px;
        color: var(--accent);
        font-family: serif;
        line-height: 0;
        margin-bottom: 60px;
        opacity: 0.8;
      }

      .quote-theme .quote-text {
        font-size: 64px;
        color: var(--text);
        line-height: 1.3;
        font-weight: 700;
        margin: 0 0 40px 0;
        font-style: italic;
      }

      .quote-theme .quote-author {
        display: flex;
        align-items: center;
        gap: 20px;
      }

      .quote-theme .line {
        width: 60px;
        height: 4px;
        background: var(--accent);
      }

      .quote-theme .quote-author p {
        font-size: 32px;
        color: var(--text);
        opacity: 0.9;
        margin: 0;
        font-weight: 500;
      }

      .quote-theme .footer {
        width: 100%;
        padding: 20px 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 3;
        position: relative;
        border-top: 1px solid var(--text);
        background: rgba(0,0,0,0.3);
      }

      .quote-theme .logo-area {
        width: 80px;
        height: 80px;
      }

      .quote-theme .logo-area img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .quote-theme .date-area {
        color: var(--text);
        opacity: 0.7;
        font-size: 20px;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
    `
  },
  {
    id: 'minimal',
    name: 'Minimalist',
    description: 'Clean, white space focused design.',
    defaults: {
      accentColor: '#10b981',
      bgColor: '#ffffff',
      textColor: '#111827'
    },
    html: `
      <div class="template-wrapper minimal-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="minimal-content-wrapper">
            <div class="image-frame">
                <img src="{image}" />
            </div>
            <div class="content-body">
                <div class="top-meta">
                    <img src="{logo}" class="mini-logo" />
                    <span class="date">{date}</span>
                </div>
                <h1 class="title">{heading}</h1>
                <p class="desc">{subheading}</p>
                <div class="accent-dot"></div>
            </div>
        </div>
        <div class="ad-container">
            <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.minimal-theme {
        width: 1080px;
        height: 1080px;
        background: var(--bg);
        font-family: var(--font), sans-serif;
        display: flex;
        flex-direction: column;
      }
      
      .minimal-theme .minimal-content-wrapper {
        flex: 1;
        padding: 60px;
        display: flex;
        flex-direction: column;
        gap: 50px;
        min-height: 0;
      }

      .minimal-theme .ad-container {
        display: none;
      }

      .minimal-theme.has-ad .ad-container {
        max-height: 120px;
        height: auto;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f9fafb;
        flex: 0 0 auto;
      }
      
      .minimal-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      .minimal-theme .image-frame {
        width: 100%;
        flex: 1;
        min-height: 0;
        overflow: hidden;
        border: 8px solid var(--accent);
      }

      .minimal-theme .image-frame img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .minimal-theme .content-body {
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 0 40px;
      }

      .minimal-theme .top-meta {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 30px;
      }

      .minimal-theme .mini-logo {
        height: 40px;
        width: auto;
      }

      .minimal-theme .date {
        font-size: 20px;
        color: var(--text);
        opacity: 0.6;
        font-weight: 500;
      }

      .minimal-theme .title {
        font-size: 56px;
        color: var(--text);
        margin: 0 0 20px 0;
        line-height: 1.2;
        font-weight: 700;
      }

      .minimal-theme .desc {
        font-size: 28px;
        color: var(--text);
        opacity: 0.8;
        margin: 0 0 40px 0;
        line-height: 1.5;
        max-width: 800px;
      }

      .minimal-theme .accent-dot {
        width: 12px;
        height: 12px;
        background: var(--accent);
        border-radius: 50%;
      }
    `
  },
  {
    id: 'feature',
    name: 'Feature Card',
    defaults: {
      accentColor: '#8b5cf6',
      bgColor: '#ffffff',
      textColor: '#1f2937'
    },
    description: 'Centered layout with overlapping logo and footer strip.',
    html: `
      <div class="template-wrapper feature-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="image-section">
            <img src="{image}" class="main-image" />
        </div>
        
        <div class="content-section">
            <div class="logo-section">
                <div class="logo-circle">
                    <img src="{logo}" />
                </div>
            </div>
            <p class="subhead">{subheading}</p>
            <h1 class="headline">{heading}</h1>
        </div>

        <div class="footer-strip">
            <div class="footer-left">{date}</div>
            <div class="footer-right">
                {domain}
            </div>
        </div>
        
        <div class="ad-container">
            <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.feature-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
        position: relative;
      }

      .feature-theme .image-section {
        width: 100%;
        flex: 1;
        min-height: 0;
        position: relative;
        overflow: hidden;
      }

      .feature-theme .main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .feature-theme .content-section {
        flex: 0 0 auto;
        padding: 90px 60px 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
      }

      .feature-theme .logo-section {
        position: absolute;
        top: -70px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
      }

      .feature-theme .logo-circle {
        width: 140px;
        height: 140px;
        background: white;
        border-radius: 50%;
        padding: 0;
        border: 4px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }

      .feature-theme .logo-circle img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }

      .feature-theme .subhead {
        font-size: 32px;
        color: var(--text);
        opacity: 0.8;
        margin: 0 0 20px 0;
      }

      .feature-theme .headline {
        font-size: 64px;
        line-height: 1.3;
        color: var(--accent);
        margin: 0;
        font-weight: 700;
      }

      .feature-theme .footer-strip {
        height: 80px;
        flex: 0 0 auto;
        background: rgba(0,0,0,0.05);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 50px;
        font-sivar(--text);
        opacity: 0.7x;
        color: #6b7280;
      }
      
      .feature-theme .ad-container {
        display: none;
      }

      .feature-theme.has-ad .ad-container {
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        flex: 0 0 auto;
      }
      
      .feature-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `
  },
  {
    id: 'classikalo',
    name: 'Classikalo',
    description: 'Clean news card style.',
    defaults: {
      accentColor: '#D9232D',
      bgColor: '#ffffff',
      textColor: '#111827'
    },
    html: `
      <div class="template-wrapper pa-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="pa-image-area">
          <img src="{image}" class="pa-main-image" />
        </div>
        <div class="pa-content-area">
          <div class="pa-meta">
            <span class="pa-date">{date}</span>
          </div>
          <h1 class="pa-headline">{heading}</h1>
          <p class="pa-subhead">{subheading}</p>
          <div class="pa-footer">
              <img src="{logo}" class="pa-logo" />
          </div>
        </div>
        <div class="ad-container">
          <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.pa-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
        position: relative;
      }

      .pa-theme .pa-image-area {
        width: 100%;
        flex: 1;
        min-height: 0;
        position: relative;
        overflow: hidden;
      }

      .pa-theme .pa-main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .pa-theme .pa-content-area {
        flex: 0 0 auto;
        padding: 40px 50px;
        display: flex;
        flex-direction: column;
        background: var(--bg);
        border-top: 8px solid var(--accent);
      }

      .pa-theme .pa-meta {
        margin-bottom: 20px;
        font-size: 24px;
        color: var(--text);
        opacity: 0.7;
        font-weight: 500;
      }

      .pa-theme .pa-headline {
        font-size: 60px;
        line-height: 1.3;
        color: var(--text);
        margin: 0 0 20px 0;
        font-weight: 700;
      }

      .pa-theme .pa-subhead {
        font-size: 30px;
        color: var(--text);
        opacity: 0.9;
        margin: 0 0 40px 0;
        line-height: 1.5;
      }

      .pa-theme .pa-footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 20px;
      }

      .pa-theme .pa-logo {
        height: 60px;
        width: auto;
        object-fit: contain;
      }

      .pa-theme .ad-container {
        display: none;
      }

      .pa-theme.has-ad .ad-container {
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f3f4f6;
        flex: 0 0 auto;
      }

      .pa-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `
  },
  {
    id: 'bbc',
    name: 'BBC News Style',
    description: 'Classic clean design with red accents.',
    defaults: {
      accentColor: '#b80000',
      bgColor: '#ffffff',
      textColor: '#111827'
    },
    html: `
      <div class="template-wrapper bbc-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="bbc-image-area">
          <img src="{image}" class="bbc-main-image" />
          <div class="bbc-category-tag">NEWS</div>
        </div>
        <div class="bbc-content-area">
          <h1 class="bbc-headline">{heading}</h1>
          <p class="bbc-subhead">{subheading}</p>
          <div class="bbc-footer">
             <div class="bbc-meta">
                <span class="bbc-time">{date}</span>
                <span class="bbc-divider">|</span>
                <span class="bbc-domain">{domain}</span>
             </div>
             <div class="bbc-logo-wrapper">
                <img src="{logo}" class="bbc-logo" />
             </div>
          </div>
        </div>
        <div class="ad-container">
          <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.bbc-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
        position: relative;
      }

      .bbc-theme .bbc-image-area {
        width: 100%;
        flex: 1;
        min-height: 0;
        position: relative;
        overflow: hidden;
      }

      .bbc-theme .bbc-main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .bbc-theme .bbc-category-tag {
        position: absolute;
        bottom: 0;
        left: 0;
        background: var(--accent);
        color: white;
        padding: 10px 30px;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
      }

      .bbc-theme .bbc-content-area {
        flex: 0 0 auto;
        padding: 50px;
        display: flex;
        flex-direction: column;
        background: var(--bg);
        border-bottom: 8px solid var(--accent);
      }

      .bbc-theme .bbc-headline {
        font-size: 64px;
        line-height: 1.2;
        color: var(--text);
        margin: 0 0 25px 0;
        font-weight: 700;
      }

      .bbc-theme .bbc-subhead {
        font-size: 32px;
        color: var(--text);
        opacity: 0.8;
        margin: 0 0 40px 0;
        line-height: 1.4;
      }

      .bbc-theme .bbc-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: auto;
      }

      .bbc-theme .bbc-meta {
        font-size: 24px;
        color: var(--text);
        opacity: 0.6;
        display: flex;
        align-items: center;
        gap: 15px;
      }

      .bbc-theme .bbc-divider {
        color: var(--text);
        opacity: 0.4;
      }

      .bbc-theme .bbc-logo-wrapper {
        height: 50px;
      }

      .bbc-theme .bbc-logo {
        height: 100%;
        width: auto;
        object-fit: contain;
      }

      .bbc-theme .ad-container {
        display: none;
      }

      .bbc-theme.has-ad .ad-container {
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f3f4f6;
        flex: 0 0 auto;
      }

      .bbc-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `
  },
  {
    id: 'ntv',
    name: 'NTV Style',
    description: 'Vibrant green accent with clean typography.',
    defaults: {
      accentColor: '#00A651',
      bgColor: '#ffffff',
      textColor: '#000000'
    },
    html: `
      <div class="template-wrapper ntv-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="ntv-image-container">
            <img src="{image}" class="ntv-main-image" />
            <div class="ntv-logo-badge">
                <img src="{logo}" />
            </div>
        </div>
        <div class="ntv-content">
            <div class="ntv-meta">
                <span class="ntv-date-pill">{date}</span>
            </div>
            <h1 class="ntv-headline">{heading}</h1>
            <p class="ntv-subhead">{subheading}</p>
            <div class="ntv-bottom-bar"></div>
        </div>
        <div class="ad-container">
            <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.ntv-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
        position: relative;
      }

      .ntv-theme .ntv-image-container {
        width: 100%;
        flex: 1;
        min-height: 0;
        position: relative;
        overflow: hidden;
      }

      .ntv-theme .ntv-main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .ntv-theme .ntv-logo-badge {
        position: absolute;
        top: 40px;
        left: 40px;
        width: 120px;
        height: 120px;
        background: var(--bg);
        border-radius: 50%;
        padding: 0;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .ntv-theme .ntv-logo-badge img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .ntv-theme .ntv-content {
        flex: 0 0 auto;
        padding: 50px;
        background: var(--bg);
        display: flex;
        flex-direction: column;
        position: relative;
      }

      .ntv-theme .ntv-meta {
        margin-bottom: 25px;
      }

      .ntv-theme .ntv-date-pill {
        background: var(--accent);
        color: white;
        padding: 10px 25px;
        border-radius: 50px;
        font-size: 24px;
        font-weight: 600;
      }

      .ntv-theme .ntv-headline {
        font-size: 60px;
        line-height: 1.3;
        color: var(--text);
        margin: 0 0 20px 0;
        font-weight: 700;
      }

      .ntv-theme .ntv-subhead {
        font-size: 30px;
        color: var(--text);
        opacity: 0.8;
        margin: 0 0 30px 0;
        line-height: 1.5;
      }

      .ntv-theme .ntv-bottom-bar {
        height: 10px;
        width: 100%;
        background: linear-gradient(90deg, var(--accent) 0%, #8dc63f 100%);
        margin-top: auto;
      }

      .ntv-theme .ad-container {
        display: none;
      }

      .ntv-theme.has-ad .ad-container {
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f3f4f6;
        flex: 0 0 auto;
      }

      .ntv-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `
  },
  {
    id: 'btv',
    name: 'BTV Style',
    description: 'Official and formal broadcast style.',
    defaults: {
      accentColor: '#006a4e',
      bgColor: '#ffffff',
      textColor: '#000000',
      tag: 'বিনোদন',
      date: '১২ জানুয়ারি ২০২৬'
    },
    html: `
      <div class="template-wrapper btv-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="btv-header">
            <div class="btv-logo-area">
                <img src="{logo}" />
            </div>
            <div class="btv-date">{date}</div>
        </div>
        <div class="btv-image-frame">
            <img src="{image}" class="btv-main-image" />
            <div class="btv-live-badge">{tag}</div>
        </div>
        <div class="btv-content">
            <h1 class="btv-headline">{heading}</h1>
            <p class="btv-subhead">{subheading}</p>
        </div>
        <div class="ad-container">
            <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.btv-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
        position: relative;
        border: 20px solid var(--bg);
      }

      .btv-theme .btv-header {
        height: 100px;
        flex: 0 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px 20px;
        border-bottom: 4px solid var(--accent);
      }

      .btv-theme .btv-logo-area {
        height: 80px;
        width: 150px;
      }

      .btv-theme .btv-logo-area img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        object-position: left;
      }

      .btv-theme .btv-date {
        font-size: 24px;
        color: var(--text);
        font-weight: 600;
        opacity: 0.8;
      }

      .btv-theme .btv-image-frame {
        flex: 1;
        min-height: 0;
        width: 100%;
        position: relative;
        overflow: hidden;
        margin-top: 20px;
        border: 2px solid #eee;
      }

      .btv-theme .btv-main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .btv-theme .btv-live-badge {
        position: absolute;
        top: 20px;
        right: 20px;
        background: #cc0000;
        color: white;
        padding: 5px 15px;
        font-weight: bold;
        font-size: 20px;
        border-radius: 4px;
        animation: blink 2s infinite;
      }

      .btv-theme .btv-content {
        flex: 0 0 auto;
        padding: 30px 20px;
        background: var(--bg);
      }

      .btv-theme .btv-headline {
        font-size: 56px;
        line-height: 1.3;
        color: var(--text);
        margin: 0 0 15px 0;
        font-weight: 700;
      }

      .btv-theme .btv-subhead {
        font-size: 28px;
        color: var(--text);
        opacity: 0.8;
        margin: 0;
        line-height: 1.4;
      }

      .btv-theme .ad-container {
        display: none;
      }

      .btv-theme.has-ad .ad-container {
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f3f4f6;
        flex: 0 0 auto;
        margin-top: 20px;
      }

      .btv-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `
  },
  {
    id: 'amaderdesh',
    name: 'Daily Amarder Desh',
    description: 'Bold newspaper headline style.',
    defaults: {
      accentColor: '#009958',
      bgColor: '#CDDCD5',
      textColor: '#1f2937',
      font: 'Noto Serif Bengali',
      readmore: 'বিস্তারিত কমেন্টে',
      date: '৩০ ডিসেম্বর ২০২৬'
    },
    html: `
      <div class="template-wrapper adesh-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="adesh-logo">
            <img src="{logo}" />
        </div>
        <div class="adesh-image-area">
            <img src="{image}" class="adesh-main-image" />
        </div>
        <div class="adesh-content">
            <h1 class="adesh-headline">{heading}</h1>
            <p class="adesh-subhead">{subheading}</p>
            <p class="adesh-readmore">{readmore}</p>
        </div>
        <div class="adesh-footer">
            <div class="adesh-domain">{domain}</div>
            <div class="adesh-date">{date}</div>
        </div>
        <div class="ad-container">
            <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.adesh-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
      }

      .adesh-theme .adesh-logo {
        height: 150px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
      }

      .adesh-theme .adesh-logo img {
        height: 100%;
        object-fit: contain;
      }

      .adesh-theme .adesh-image-area {
        flex: 1;
        overflow: hidden;
        min-height: 0;
        width: 100%;
        padding: 40px 40px 0;
      }

      .adesh-theme .adesh-main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .adesh-theme .adesh-content {
        padding: 40px;
        text-align: center;
        color: var(--text);
      }

      .adesh-theme .adesh-headline {
        font-size: 68px;
        line-height: 1.2;
        margin: 0 0 10px 0;
        font-weight: 800;
      }

      .adesh-theme .adesh-subhead {
        font-size: 32px;
        color: var(--text);
        line-height: 1.5;
        margin: 0;
      }

      .adesh-theme .adesh-readmore:empty {
        display: none;
      }

      .adesh-theme .adesh-readmore {
        margin-top: 20px;
        font-size: 28px;
        color: #EE1C25;
        font-weight: 600;
        position: relative;
        line-height: 1;
        margin: 20px 0 0 0;
      }

      .adesh-theme .adesh-readmore:before {
        content: '';
        display: inline-block;
        border: solid #EE1C25;
        border-width: 0 0px 3px 3px;
        padding: 6px;
        margin-right: 10px;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
      }

      .adesh-theme .adesh-readmore:after {
        content: '';
        display: inline-block;
        margin-left: 10px;
        border: solid #EE1C25;
        border-width: 0 3px 3px 0;
        padding: 6px;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
      }

      .adesh-footer {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--accent);
        color: white;
        padding: 16px 40px;
        line-height: 1;
        border-bottom: 10px solid #EE1C25;
      }

      .adesh-footer:after {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 0;
        right: 0;
        height: 4px;
        background: #FFFFFF;
      }

      .adesh-theme .ad-container {
        display: none;
      }

      .adesh-theme.has-ad .ad-container {
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f3f4f6;
        flex: 0 0 auto;
      }

      .adesh-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `
  },
  {
    id: 'somoy',
    name: 'Somoy TV',
    description: 'Modern broadcast style with bottom ticker.',
    defaults: {
      accentColor: '#BD0706',
      bgColor: '#383838',
      textColor: '#FFFFFF',
      font: 'Noto Serif Bengali',
      tag: 'ব্রেকিং নিউজ',
      readmore: 'বিস্তারিত কমেন্টে',
      date: '৩২ ডিসেম্বর ২০২৬'
    },
    html: `
      <div class="template-wrapper somoy-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="somoy-image-area">
            <span class="somoy-tag">{tag}</span>
            <img src="{image}" class="somoy-main-image" />
        </div>
        <div class="somoy-content">
            <h1 class="somoy-headline">{heading}</h1>
            <p class="somoy-subhead">{subheading}</p>
        </div>
        <div class="somoy-footer">
            <div class="somoy-logo">
                <img src="{logo}" />
            </div>
            <span class="somoy-more">{readmore}</span>
            <div class="somoy-time-bar">{date}</div>
        </div>
        <div class="ad-container">
            <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.somoy-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
        border: 10px solid var(--accent);
      }

      .somoy-theme .somoy-image-area {
        overflow: hidden;
        flex: 1;
        min-height: 0;
        width: 100%;
        position: relative;
      }

      .somoy-theme .somoy-image-area .somoy-tag {
        display: block;
        position: absolute;
        bottom: -4px;
        left: 0;
        height: 44px;
        line-height: 44px;
        padding: 0 10px 0 20px;
        background: var(--accent);
        color: white;
        font-size: 24px;
        font-weight: 700;
      }
      
      .somoy-theme .somoy-tag::after {
        content: '';
        position: absolute;
        top: 0;
        right: -30px;
        width: 0;
        height: 0;
        border-top: 44px solid var(--accent);
        border-right: 30px solid transparent;
      }

      .somoy-theme .somoy-main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .somoy-theme .somoy-content {
        flex: 0 0 auto;
        padding: 40px 50px;
        background: var(--bg);
        border-top: 4px solid var(--accent);
        display: flex;
        flex-direction: column;
      }

      .somoy-theme .somoy-headline {
        font-size: 60px;
        line-height: 1.2;
        color: var(--text);
        margin: 0 0 20px 0;
        font-weight: 700;
        text-align: center;
      }

      .somoy-theme .somoy-subhead {
        font-size: 30px;
        color: var(--text);
        opacity: 0.8;
        margin: 0;
        line-height: 1.4;
        text-align: center;
      }

      .somoy-theme .somoy-footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
      }

      .somoy-theme .somoy-logo {
        height: 150px;
        min-width: 250px;
        padding-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .somoy-theme .somoy-logo img {
        max-height: 100%;
        max-width: 100%;
        width: auto;
        height: auto;
        object-fit: contain;
      }
      
      .somoy-theme .somoy-more {
        background: var(--accent);
        color: white;
        border-radius: 10px;
        font-size: 32px;
        padding: 10px 20px;
        line-height: 1;
        margin-bottom: 10px;
      }
        
      .somoy-theme .somoy-time-bar {
        position: relative;
        height: 44px;
        line-height: 44px;
        padding: 0 12px 0 10px;
        background: var(--accent);
        color: white;
        font-size: 24px;
        font-weight: 700;
      }
      
      .somoy-theme .somoy-time-bar::before {
        content: '';
        position: absolute;
        top: 0;
        left: -30px;
        width: 0;
        height: 0;
        border-bottom: 44px solid var(--accent);
        border-left: 30px solid transparent;
      }

      .somoy-theme .ad-container {
        display: none;
      }

      .somoy-theme.has-ad .ad-container {
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f3f4f6;
        flex: 0 0 auto;
      }

      .somoy-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `
  },
  {
    id: 'jamuna',
    name: 'Jamuna TV',
    description: 'Sleek design with gradient accents.',
    defaults: {
      accentColor: '#9b090d',
      bgColor: '#810004',
      textColor: '#ffffff',
      domain: 'www.kamuna.tv',
      facebook: 'kamunatelevision',
      youtube: 'kamunatvbd',
      font: 'Noto Serif Bengali'
    },
    html: `
      <div class="template-wrapper jamuna-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="jamuna-body">
            <div class="jamuna-image-wrap">
                <img src="{image}" class="jamuna-main-image" />
            </div>
            <div class="jamuna-text-wrap">
                <h1 class="jamuna-headline">{heading}</h1>
                <p class="jamuna-subhead">{subheading}</p>
                <div class="jamuna-date">{date}</div>
            </div>
        </div>
        <div class="jamuna-footer">
            <div class="jamuna-logo">
                <img src="{logo}" />
            </div>
            <div class="jamuna-domain">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                <span>{domain}</span>
            </div>
            <div class="jamuna-facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                <span>{facebook}</span>
            </div>
            <div class="jamuna-youtube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                <span>{youtube}</span>
            </div>
        </div>
        <div class="ad-container">
            <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.jamuna-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        font-family: var(--font), sans-serif;
      }

      .jamuna-theme .jamuna-footer {
        height: 75px;
        flex: 0 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--bg);
        padding: 0 30px;
      }

      .jamuna-theme .jamuna-logo img {
        height: 50px;
        width: auto;
        object-fit: contain;
        object-position: left;
      }

      .jamuna-theme .jamuna-logo,
      .jamuna-theme .jamuna-domain,
      .jamuna-theme .jamuna-facebook,
      .jamuna-theme .jamuna-youtube {
        font-size: 24px;
        color: var(--text);
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .jamuna-theme .jamuna-body {
        flex: 1;
        min-height: 0;
        display: flex;
        flex-direction: column;
        background-color: var(--accent);
      }

      .jamuna-theme .jamuna-image-wrap {
        flex: 1;
        min-height: 0;
        width: 100%;
        overflow: hidden;
        border: 10px solid var(--accent);
        border-bottom: none;
      }

      .jamuna-theme .jamuna-main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .jamuna-theme .jamuna-text-wrap {
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        padding: 40px;
        text-align: center;
      }

      .jamuna-theme .jamuna-date {
        display: inline-block;
        color: var(--text);
        opacity: 0.8;
        border-radius: 4px;
        font-size: 20px;
        align-self: flex-end;
      }

      .jamuna-theme .jamuna-headline {
        font-size: 56px;
        line-height: 1.2;
        color: var(--text);
        margin: 0 0 20px 0;
        font-weight: 700;
      }

      .jamuna-theme .jamuna-subhead {
        font-size: 28px;
        color: var(--text);
        opacity: 0.8;
        margin: 0;
        line-height: 1.4;
      }

      .jamuna-theme .ad-container {
        display: none;
      }

      .jamuna-theme.has-ad .ad-container {
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f3f4f6;
      }

      .jamuna-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `
  },
  {
    id: 'vertical1',
    name: 'Vertical',
    description: 'Split layout with quote on left and image on right.',
    defaults: {
      accentColor: '#D9232D',
      bgColor: '#ffffff',
      textColor: '#ffffff',
      content: 'আজকের গুরুত্বপূর্ণ সব খবর, এক নজরে দেখে নিন।',
      author: 'ড. কবি',
      designation: 'বিশ্বখ্যাত কবি ও সাহিত্যিক',
      date: '২০ সেপ্টেম্বর ২০২৬',
      domain: 'example.com'
    },
    html: `
      <div class="template-wrapper vertical1-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="main-content">
        <div class="left-panel">
            <div class="quote-icon">
                <svg height="40px" width="40px" fill="currentColor" version="1.1" viewBox="0 0 191.029 191.029" xml:space="preserve">
                  <path d="M44.33,88.474v15.377h38.417v82.745H0v-82.745h0.002V88.474c0-31.225,8.984-54.411,26.704-68.918 C38.964,9.521,54.48,4.433,72.824,4.433v44.326C62.866,48.759,44.33,48.759,44.33,88.474z M181.107,48.759V4.433 c-18.343,0-33.859,5.088-46.117,15.123c-17.72,14.507-26.705,37.694-26.705,68.918v15.377h0v82.745h82.744v-82.745h-38.417V88.474 C152.613,48.759,171.149,48.759,181.107,48.759z" />
                </svg>
            </div>
            <div class="content-text">
                <h1 class="main-quote">{content}</h1>
            </div>
            <div class="footer-area">
                <div class="logo-area">
                    <img src="{logo}" />
                </div>
                <div class="meta-info">
                    <span class="date">{date}</span>
                    <span class="separator">•</span>
                    <span class="domain">{domain}</span>
                </div>
            </div>
            <div class="deco-squares">
                <span></span><span></span><span></span>
            </div>
        </div>
        <div class="right-panel">
            <img src="{image}" class="person-image" />
            <div class="name-plate">
                <div class="name-info">
                    <h2 class="name">{author}</h2>
                    <p class="designation">{designation}</p>
                </div>
            </div>
        </div>
        </div>
        <div class="ad-container">
            <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.vertical1-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
        position: relative;
        overflow: hidden;
      }

      .vertical1-theme .main-content {
        display: flex;
        flex: 1;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
      }

      .vertical1-theme .left-panel {
        width: 50%;
        background-color: var(--accent);
        height: 100%;
        padding: 60px;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 2;
        border-top-right-radius: 40px;
      }

      .vertical1-theme .quote-icon {
        margin-bottom: 40px;
      }
      
      .vertical1-theme .quote-icon svg {
        width: 100px;
        height: 100px;
        fill: white;
        opacity: 0.9;
      }

      .vertical1-theme .content-text {
        flex: 1;
      }

      .vertical1-theme .main-quote {
        font-size: 48px;
        color: white;
        line-height: 1.4;
        font-weight: 600;
        margin: 0;
      }

      .vertical1-theme .footer-area {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .vertical1-theme .logo-area {
        height: 60px;
        display: flex;
        align-items: center;
      }

      .vertical1-theme .logo-area img {
        height: 100%;
        width: auto;
        object-fit: contain;
      }

      .vertical1-theme .meta-info {
        display: flex;
        align-items: center;
        gap: 10px;
        color: rgba(255, 255, 255, 0.9);
        font-size: 20px;
        font-weight: 500;
      }

      .vertical1-theme .right-panel {
        flex: 1;
        height: 100%;
        overflow: hidden;
        position: relative;
        background: #f3f4f6;
        margin-left: -35px;
        z-index: 1;
      }

      .vertical1-theme .person-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .vertical1-theme .name-plate {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 35px;
        background: rgba(255, 255, 255, 0.9);
        padding: 20px 30px;
      }

      .vertical1-theme .name {
        font-size: 42px;
        color: var(--accent);
        margin: 0 0 5px 0;
        font-weight: 800;
      }

      .vertical1-theme .designation {
        font-size: 24px;
        color: #333;
        margin: 0;
        font-weight: 500;
      }
      
      .vertical1-theme .deco-squares {
        position: absolute;
        top: 60px;
        right: 40px;
        display: flex;
        gap: 15px;
      }
      
      .vertical1-theme .deco-squares span {
        width: 20px;
        height: 20px;
        border: 2px solid rgba(255,255,255,0.4);
        display: block;
        border-radius: 4px;
      }

      .vertical1-theme .ad-container {
        display: none;
      }
      
      .vertical1-theme.has-ad .ad-container {
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        flex: 0 0 auto;
        z-index: 10;
      }
      
      .vertical1-theme.has-ad .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `
  },
  {
    id: 'gradient-news',
    name: 'Gradient News Card',
    description: 'Full image background with gradient overlay and bottom footer.',
    defaults: {
      accentColor: '#D9232D',
      bgColor: '#000000',
      textColor: '#ffffff',
      heading: 'মিডিয়া ছাড়লেন লোটাবাবা; পরলেন প্যান্টের উপর লুঙ্গি, মুখ আর দেখাবেন না',
      category: 'বিনোদন',
      date: '২৭ ডিসেম্বর ২০২৬',
      domain: 'example.com'
    },
    html: `
      <div class="template-wrapper gradient-news-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="bg-container">
            <img src="{image}" alt="Background" class="bg-image" />
        </div>

        <div class="top-logo">
            <div class="logo-wrapper">
                <img src="{logo}" class="logo-img" />
            </div>
        </div>

        <div class="content-section">
            <div class="headline-container">
                <div class="vertical-bar"></div>
                <h1 class="heading">{heading}</h1>
            </div>
        </div>

        <div class="footer-bar">
            <div class="footer-left">
                <span class="category">{category}</span>
                <span class="separator">|</span>
                <span class="date">{date}</span>
            </div>
            <div class="footer-right">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                <span class="domain">{domain}</span>
            </div>
        </div>
        <div class="ad-container">
          <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.gradient-news-theme {
        width: 1080px;
        height: 1080px;
        position: relative;
        overflow: hidden;
        font-family: var(--font), sans-serif;
        background-color: var(--bg);
        color: white;
        display: flex;
        flex-direction: column;
      }

      .gradient-news-theme .bg-container {
        position: absolute;
        overflow: hidden;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
      }

      .gradient-news-theme .bg-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .gradient-news-theme .content-section::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 250%;
        background: linear-gradient(to top, var(--accent) 0%, transparent 100%);
        z-index: -1;
      }

      .gradient-news-theme .top-logo {
        position: absolute;
        top: 0;
        right: 50px;
        z-index: 10;
        width: 140px;
        height: 280px;
        background: white;
        border-bottom-right-radius: 65px;
        border-bottom-left-radius: 65px;
        display: flex;
        align-items: end;
        justify-content: center;
        background-color: var(--accent);
      }

      .gradient-news-theme .logo-wrapper {
        width: 130px;
        height: 130px;
        margin-bottom: 5px;
        border-radius: 50%;
        background-color: white;
        border: 1px solid white;
      }

      .gradient-news-theme .logo-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 50%;
        border: 4px solid white;
      }

      .gradient-news-theme .content-section {
        position: absolute;
        bottom: 100px; /* Height of footer */
        left: 0;
        width: 100%;
        padding: 0 60px 50px 60px;
        z-index: 10;
      }

      .gradient-news-theme .headline-container {
        display: flex;
        align-items: stretch;
        gap: 30px;
      }

      .gradient-news-theme .vertical-bar {
        width: 12px;
        background-color: #facc15; /* Yellow */
        flex-shrink: 0;
      }

      .gradient-news-theme .heading {
        font-size: 48px;
        line-height: 1.2;
        font-weight: 700;
        margin: 0;
        color: white;
        text-shadow: 0 2px 4px rgba(0,0,0,0.5);
      }

      .gradient-news-theme .footer-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background-color: var(--accent);
        z-index: 10;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 60px;
        font-size: 32px;
      }

      .gradient-news-theme .footer-left {
        display: flex;
        align-items: center;
        gap: 20px;
        font-weight: 500;
      }

      .gradient-news-theme .separator {
        opacity: 0.7;
      }

      .gradient-news-theme .footer-right {
        display: flex;
        gap: 15px;
        font-weight: 600;
        align-items: center;
      }

      /* Ad support */
      .gradient-news-theme .ad-container {
        display: none;
      }

      .gradient-news-theme.has-ad .ad-container {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 120px;
        background: white;
        z-index: 20;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .gradient-news-theme.has-ad .footer-bar {
        bottom: 120px;
      }
      
      .gradient-news-theme.has-ad .content-section {
        bottom: 220px;
      }
    `
  },
  {
    id: "global-desk",
    name: "Global Desk",
    description: "International newsroom layout with a strong editorial hierarchy.",
    defaults: {
      "accentColor": "#0B5CAD",
      "bgColor": "#ffffff",
      "textColor": "#111827",
      "heading": "GLOBAL DESK",
      "subheading": "Top international developments at a glance.",
      "date": "08 October 2026",
      "domain": "example.com"
},
    html: "<div class=\"template-wrapper global-desk-theme\" style=\"--accent:{accentColor};--bg:{bgColor};--text:{textColor};--font:'{font}';\">\n      <div class=\"gd-top\"><span class=\"gd-kicker\">WORLD / {date}</span><span class=\"gd-brand\">{domain}</span></div>\n      <div class=\"gd-image\"><img src=\"{image}\" data-main-image=\"true\"></div>\n      <div class=\"gd-body\"><div class=\"gd-rule\"></div><h1>{heading}</h1><p>{subheading}</p></div>\n      <div class=\"gd-footer\"><span>INTERNATIONAL</span><span>{date}</span></div>\n      <div class=\"gd-logo\"><img src=\"{logo}\"></div><div class=\"ad-container\"><img src=\"{adImage}\"></div>\n    </div>",
    css: ".global-desk-theme{width:1080px;height:1080px;background:var(--bg);color:var(--text);font-family:var(--font),sans-serif;position:relative;overflow:hidden}\n    .global-desk-theme .gd-top{height:92px;padding:0 55px;display:flex;align-items:center;justify-content:space-between;font-size:22px;font-weight:700;letter-spacing:2px;border-bottom:2px solid #d9dee7}\n    .global-desk-theme .gd-brand{color:var(--accent)} .global-desk-theme .gd-image{height:535px;overflow:hidden}.global-desk-theme .gd-image img{width:100%;height:100%;object-fit:cover}\n    .global-desk-theme .gd-body{padding:35px 55px}.global-desk-theme .gd-rule{width:95px;height:9px;background:var(--accent);margin-bottom:24px}.global-desk-theme h1{font-size:65px;line-height:1.04;margin:0 0 18px;font-weight:800}.global-desk-theme p{font-size:31px;line-height:1.3;margin:0;opacity:.72}\n    .global-desk-theme .gd-footer{position:absolute;bottom:28px;left:55px;right:55px;display:flex;justify-content:space-between;font-size:20px;font-weight:700;letter-spacing:1px}.global-desk-theme .gd-logo{position:absolute;right:55px;bottom:80px;width:92px;height:92px;border-radius:50%;overflow:hidden;background:#fff;border:3px solid var(--accent);display:none}.global-desk-theme.has-logo .gd-logo{display:block}.global-desk-theme .gd-logo img{width:100%;height:100%;object-fit:contain}"
  }
,
  {
    id: "world-focus",
    name: "World Focus",
    description: "Magazine-style international story card with a cinematic image treatment.",
    defaults: {
      "accentColor": "#E11D48",
      "bgColor": "#ffffff",
      "textColor": "#111827",
      "heading": "WORLD FOCUS",
      "subheading": "A closer look at the story shaping the world today.",
      "date": "08 October 2026",
      "domain": "example.com"
},
    html: "<div class=\"template-wrapper world-focus-theme\" style=\"--accent:{accentColor};--bg:{bgColor};--text:{textColor};--font:'{font}';\">\n      <img class=\"wf-image\" src=\"{image}\" data-main-image=\"true\"><div class=\"wf-shade\"></div>\n      <div class=\"wf-top\"><span>WORLD FOCUS</span><span>{date}</span></div>\n      <div class=\"wf-copy\"><div class=\"wf-label\">INTERNATIONAL REPORT</div><h1>{heading}</h1><p>{subheading}</p></div>\n      <div class=\"wf-bottom\"><span>{domain}</span><span>GLOBAL</span></div><div class=\"wf-logo\"><img src=\"{logo}\"></div>\n    </div>",
    css: ".world-focus-theme{width:1080px;height:1080px;position:relative;overflow:hidden;background:#111;color:#fff;font-family:var(--font),sans-serif}.world-focus-theme .wf-image{width:100%;height:100%;object-fit:cover}.world-focus-theme .wf-shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.35),transparent 35%,rgba(0,0,0,.9))}\n    .world-focus-theme .wf-top{position:absolute;top:45px;left:55px;right:55px;display:flex;justify-content:space-between;font-size:21px;font-weight:800;letter-spacing:2px}.world-focus-theme .wf-top span:first-child{color:var(--accent)}\n    .world-focus-theme .wf-copy{position:absolute;left:55px;right:55px;bottom:145px}.world-focus-theme .wf-label{display:inline-block;background:var(--accent);padding:9px 16px;font-size:18px;font-weight:800;letter-spacing:1px}.world-focus-theme h1{font-size:76px;line-height:1.02;margin:20px 0 16px;max-width:900px}.world-focus-theme p{font-size:30px;max-width:850px;line-height:1.3;margin:0;color:#eee}.world-focus-theme .wf-bottom{position:absolute;left:55px;right:55px;bottom:45px;display:flex;justify-content:space-between;border-top:1px solid rgba(255,255,255,.35);padding-top:18px;font-size:18px;letter-spacing:1px}.world-focus-theme .wf-logo{display:none;position:absolute;top:105px;right:55px;width:86px;height:86px;border-radius:50%;background:#fff;overflow:hidden}.world-focus-theme.has-logo .wf-logo{display:block}.world-focus-theme .wf-logo img{width:100%;height:100%;object-fit:contain}"
  }
,
  {
    id: "international-brief",
    name: "International Brief",
    description: "Clean wire-service inspired card for short international headlines.",
    defaults: {
      "accentColor": "#111827",
      "bgColor": "#ffffff",
      "textColor": "#111827",
      "heading": "INTERNATIONAL BRIEF",
      "subheading": "Key developments, verified facts and the latest updates.",
      "date": "08 October 2026",
      "domain": "example.com"
},
    html: "<div class=\"template-wrapper intl-brief-theme\" style=\"--accent:{accentColor};--bg:{bgColor};--text:{textColor};--font:'{font}';\">\n      <div class=\"ib-head\"><div class=\"ib-mark\">IB</div><div><b>INTERNATIONAL BRIEF</b><small>{date}</small></div><span>{domain}</span></div>\n      <div class=\"ib-photo\"><img src=\"{image}\" data-main-image=\"true\"><div class=\"ib-tag\">LATEST</div></div>\n      <div class=\"ib-content\"><h1>{heading}</h1><div class=\"ib-line\"></div><p>{subheading}</p></div>\n      <div class=\"ib-foot\">WORLD NEWS <span>•</span> GLOBAL EDITION</div><div class=\"ib-logo\"><img src=\"{logo}\"></div>\n    </div>",
    css: ".intl-brief-theme{width:1080px;height:1080px;background:var(--bg);color:var(--text);font-family:var(--font),sans-serif;padding:45px 50px;position:relative;overflow:hidden}.intl-brief-theme .ib-head{height:92px;display:flex;align-items:center;gap:18px;border-bottom:2px solid #111827}.intl-brief-theme .ib-mark{width:54px;height:54px;background:var(--accent);color:white;display:grid;place-items:center;font-weight:900}.intl-brief-theme .ib-head b{display:block;font-size:23px;letter-spacing:1px}.intl-brief-theme .ib-head small{display:block;font-size:16px;margin-top:5px;opacity:.6}.intl-brief-theme .ib-head>span{margin-left:auto;font-size:17px;opacity:.6}\n    .intl-brief-theme .ib-photo{height:470px;margin-top:28px;position:relative;overflow:hidden}.intl-brief-theme .ib-photo img{width:100%;height:100%;object-fit:cover}.intl-brief-theme .ib-tag{position:absolute;top:20px;left:20px;background:var(--accent);color:#fff;padding:9px 14px;font-size:16px;font-weight:800;letter-spacing:1px}.intl-brief-theme .ib-content{padding:30px 5px}.intl-brief-theme h1{font-size:63px;line-height:1.05;margin:0 0 18px;font-weight:850}.intl-brief-theme .ib-line{width:120px;height:7px;background:var(--accent);margin-bottom:18px}.intl-brief-theme p{font-size:29px;line-height:1.35;margin:0;max-width:900px;opacity:.7}.intl-brief-theme .ib-foot{position:absolute;bottom:34px;left:50px;right:50px;border-top:1px solid #cfd4dc;padding-top:16px;font-size:17px;font-weight:800;letter-spacing:1px}.intl-brief-theme .ib-foot span{padding:0 8px}.intl-brief-theme .ib-logo{display:none}"
  }
,
  {
    id: "worldline",
    name: "Worldline",
    description: "Editorial card with a diagonal world-news composition.",
    defaults: {
      "accentColor": "#F59E0B",
      "bgColor": "#ffffff",
      "textColor": "#111827",
      "heading": "WORLDLINE",
      "subheading": "What matters now across borders and continents.",
      "date": "08 October 2026",
      "domain": "example.com"
},
    html: "<div class=\"template-wrapper worldline-theme\" style=\"--accent:{accentColor};--bg:{bgColor};--text:{textColor};--font:'{font}';\">\n      <div class=\"wl-left\"><div class=\"wl-title\">WORLD<br><strong>LINE</strong></div><div class=\"wl-date\">{date}</div></div>\n      <div class=\"wl-right\"><img src=\"{image}\" data-main-image=\"true\"><div class=\"wl-overlay\"><span>GLOBAL UPDATE</span><h1>{heading}</h1><p>{subheading}</p></div></div>\n      <div class=\"wl-footer\"><span>{domain}</span><span>01 / INTERNATIONAL</span></div>\n    </div>",
    css: ".worldline-theme{width:1080px;height:1080px;background:var(--bg);font-family:var(--font),sans-serif;color:var(--text);display:flex;position:relative;overflow:hidden}.worldline-theme .wl-left{width:285px;padding:70px 35px;border-right:8px solid var(--accent);display:flex;flex-direction:column;justify-content:space-between}.worldline-theme .wl-title{font-size:54px;line-height:.95;letter-spacing:-2px}.worldline-theme .wl-title strong{color:var(--accent)}.worldline-theme .wl-date{font-size:17px;writing-mode:vertical-rl;transform:rotate(180deg);font-weight:700;opacity:.55}.worldline-theme .wl-right{width:795px;position:relative;overflow:hidden}.worldline-theme .wl-right>img{width:100%;height:100%;object-fit:cover}.worldline-theme .wl-overlay{position:absolute;left:0;right:0;bottom:0;padding:60px 45px 95px;color:#fff;background:linear-gradient(transparent,rgba(0,0,0,.9))}.worldline-theme .wl-overlay span{color:var(--accent);font-size:17px;font-weight:900;letter-spacing:2px}.worldline-theme h1{font-size:60px;line-height:1.05;margin:14px 0}.worldline-theme p{font-size:25px;line-height:1.3;margin:0}.worldline-theme .wl-footer{position:absolute;bottom:0;left:0;right:0;height:58px;background:var(--text);color:var(--bg);display:flex;align-items:center;justify-content:space-between;padding:0 30px;font-size:16px;font-weight:800}"
  }
,
  {
    id: "global-report",
    name: "Global Report",
    description: "Premium broadcast-style international news card with a strong lower-third.",
    defaults: {
      "accentColor": "#DC2626",
      "bgColor": "#ffffff",
      "textColor": "#111827",
      "heading": "GLOBAL REPORT",
      "subheading": "Breaking developments and verified updates from around the world.",
      "date": "08 October 2026",
      "domain": "example.com"
},
    html: "<div class=\"template-wrapper global-report-theme\" style=\"--accent:{accentColor};--bg:{bgColor};--text:{textColor};--font:'{font}';\">\n      <div class=\"gr-image\"><img src=\"{image}\" data-main-image=\"true\"><div class=\"gr-live\">WORLD</div></div>\n      <div class=\"gr-bar\"><div class=\"gr-logo-text\">GLOBAL<br><b>REPORT</b></div><div class=\"gr-copy\"><h1>{heading}</h1><p>{subheading}</p></div></div>\n      <div class=\"gr-meta\"><span>{date}</span><span>{domain}</span></div><div class=\"gr-logo\"><img src=\"{logo}\"></div>\n    </div>",
    css: ".global-report-theme{width:1080px;height:1080px;background:#090909;color:#fff;font-family:var(--font),sans-serif;position:relative;overflow:hidden}.global-report-theme .gr-image{height:650px;position:relative}.global-report-theme .gr-image img{width:100%;height:100%;object-fit:cover}.global-report-theme .gr-live{position:absolute;top:30px;left:35px;background:var(--accent);padding:12px 20px;font-size:18px;font-weight:900;letter-spacing:2px}.global-report-theme .gr-bar{height:350px;background:#fff;color:#111;display:flex}.global-report-theme .gr-logo-text{width:255px;background:var(--accent);color:#fff;padding:50px 30px;font-size:38px;line-height:.9}.global-report-theme .gr-logo-text b{font-size:50px}.global-report-theme .gr-copy{padding:45px 45px;flex:1}.global-report-theme h1{font-size:55px;line-height:1.03;margin:0 0 16px}.global-report-theme p{font-size:25px;line-height:1.3;margin:0;opacity:.7}.global-report-theme .gr-meta{position:absolute;bottom:17px;left:285px;right:35px;display:flex;justify-content:space-between;font-size:15px;color:#aaa}.global-report-theme .gr-logo{display:none}"
  }
,
  {
    id: "atlas-news",
    name: "Atlas News",
    description: "Map-inspired international news card with a distinctive editorial grid.",
    defaults: {
      "accentColor": "#0F766E",
      "bgColor": "#ffffff",
      "textColor": "#111827",
      "heading": "ATLAS NEWS",
      "subheading": "The story beyond borders, with context from every angle.",
      "date": "08 October 2026",
      "domain": "example.com"
},
    html: "<div class=\"template-wrapper atlas-theme\" style=\"--accent:{accentColor};--bg:{bgColor};--text:{textColor};--font:'{font}';\">\n      <div class=\"at-grid\"></div><div class=\"at-head\"><span>ATLAS</span><b>NEWS</b><small>{date}</small></div>\n      <div class=\"at-photo\"><img src=\"{image}\" data-main-image=\"true\"></div><div class=\"at-copy\"><div class=\"at-number\">01</div><div><div class=\"at-kicker\">THE WORLD / TODAY</div><h1>{heading}</h1><p>{subheading}</p></div></div>\n      <div class=\"at-foot\">{domain}<span>WORLDWIDE EDITION</span></div>\n    </div>",
    css: ".atlas-theme{width:1080px;height:1080px;background:var(--bg);color:var(--text);font-family:var(--font),sans-serif;position:relative;overflow:hidden;padding:48px}.atlas-theme .at-grid{position:absolute;inset:0;opacity:.08;background-image:linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px);background-size:54px 54px}.atlas-theme .at-head{position:relative;height:95px;border-bottom:3px solid var(--text);display:flex;align-items:center;gap:12px}.atlas-theme .at-head span{font-size:38px;font-weight:300;letter-spacing:3px}.atlas-theme .at-head b{font-size:38px;color:var(--accent)}.atlas-theme .at-head small{margin-left:auto;font-size:17px;opacity:.55}.atlas-theme .at-photo{position:relative;margin-top:32px;height:455px;overflow:hidden}.atlas-theme .at-photo img{width:100%;height:100%;object-fit:cover}.atlas-theme .at-copy{position:relative;display:flex;gap:30px;padding:34px 0}.atlas-theme .at-number{font-size:82px;color:var(--accent);font-weight:900;line-height:.8}.atlas-theme .at-kicker{font-size:16px;font-weight:900;letter-spacing:2px;color:var(--accent)}.atlas-theme h1{font-size:59px;line-height:1.05;margin:12px 0}.atlas-theme p{font-size:27px;line-height:1.3;margin:0;max-width:820px;opacity:.72}.atlas-theme .at-foot{position:absolute;bottom:27px;left:48px;right:48px;display:flex;justify-content:space-between;font-size:16px;font-weight:800;letter-spacing:1px;border-top:1px solid #cbd5e1;padding-top:13px}"
  }
,
  {
    id: "diplomatic-brief",
    name: "Diplomatic Brief",
    description: "Elegant international affairs card for diplomacy, politics and global affairs.",
    defaults: {
      "accentColor": "#7C3AED",
      "bgColor": "#ffffff",
      "textColor": "#111827",
      "heading": "DIPLOMATIC BRIEF",
      "subheading": "Leaders, decisions and developments shaping international affairs.",
      "date": "08 October 2026",
      "domain": "example.com"
},
    html: "<div class=\"template-wrapper diplomatic-theme\" style=\"--accent:{accentColor};--bg:{bgColor};--text:{textColor};--font:'{font}';\">\n      <div class=\"dp-header\"><span>THE</span><b>DIPLOMATIC BRIEF</b><i>{date}</i></div><div class=\"dp-photo\"><img src=\"{image}\" data-main-image=\"true\"></div>\n      <div class=\"dp-card\"><div class=\"dp-label\">INTERNATIONAL AFFAIRS</div><h1>{heading}</h1><p>{subheading}</p><div class=\"dp-footer\">{domain}<span>GLOBAL DESK</span></div></div>\n    </div>",
    css: ".diplomatic-theme{width:1080px;height:1080px;background:#f7f5f1;color:var(--text);font-family:var(--font),sans-serif;position:relative;overflow:hidden;padding:48px}.diplomatic-theme .dp-header{height:78px;display:flex;align-items:center;border-bottom:1px solid #b8b2a8;gap:13px}.diplomatic-theme .dp-header span{font-family:Georgia,serif;font-size:21px}.diplomatic-theme .dp-header b{font-family:Georgia,serif;font-size:28px;letter-spacing:1px}.diplomatic-theme .dp-header i{margin-left:auto;font-style:normal;font-size:16px;opacity:.55}.diplomatic-theme .dp-photo{height:520px;margin-top:28px;overflow:hidden}.diplomatic-theme .dp-photo img{width:100%;height:100%;object-fit:cover}.diplomatic-theme .dp-card{position:absolute;left:115px;right:115px;bottom:60px;background:#fff;padding:38px 45px 28px;box-shadow:0 12px 35px rgba(0,0,0,.12)}.diplomatic-theme .dp-label{font-size:15px;color:var(--accent);font-weight:900;letter-spacing:2px}.diplomatic-theme h1{font-family:Georgia,serif;font-size:58px;line-height:1.05;margin:12px 0}.diplomatic-theme p{font-size:25px;line-height:1.3;margin:0 0 25px;opacity:.68}.diplomatic-theme .dp-footer{border-top:1px solid #ddd6ce;padding-top:14px;font-size:15px;font-weight:800;display:flex;justify-content:space-between}"
  }
,
  {
    id: "asia-pacific",
    name: "Asia Pacific Desk",
    description: "Regional international-news template with a sharp modern composition.",
    defaults: {
      "accentColor": "#EA580C",
      "bgColor": "#ffffff",
      "textColor": "#111827",
      "heading": "ASIA PACIFIC",
      "subheading": "The latest stories and developments from across the region.",
      "date": "08 October 2026",
      "domain": "example.com"
},
    html: "<div class=\"template-wrapper asia-theme\" style=\"--accent:{accentColor};--bg:{bgColor};--text:{textColor};--font:'{font}';\">\n      <div class=\"ap-side\"><div class=\"ap-symbol\">AP</div><div class=\"ap-vertical\">ASIA PACIFIC DESK</div></div><div class=\"ap-main\"><div class=\"ap-head\"><span>REGIONAL EDITION</span><span>{date}</span></div><div class=\"ap-photo\"><img src=\"{image}\" data-main-image=\"true\"></div><div class=\"ap-copy\"><h1>{heading}</h1><p>{subheading}</p></div><div class=\"ap-foot\">{domain}<span>APAC / WORLD</span></div></div>\n    </div>",
    css: ".asia-theme{width:1080px;height:1080px;background:var(--bg);color:var(--text);font-family:var(--font),sans-serif;display:flex}.asia-theme .ap-side{width:125px;background:var(--accent);color:#fff;padding:40px 28px;display:flex;flex-direction:column;align-items:center}.asia-theme .ap-symbol{font-size:34px;font-weight:900;border:2px solid #fff;padding:8px}.asia-theme .ap-vertical{margin-top:auto;writing-mode:vertical-rl;letter-spacing:4px;font-size:15px;font-weight:800}.asia-theme .ap-main{flex:1;padding:45px 48px;position:relative}.asia-theme .ap-head{display:flex;justify-content:space-between;font-size:16px;font-weight:800;letter-spacing:1px;opacity:.6}.asia-theme .ap-photo{height:500px;margin-top:30px;overflow:hidden}.asia-theme .ap-photo img{width:100%;height:100%;object-fit:cover}.asia-theme .ap-copy{padding-top:28px}.asia-theme h1{font-size:67px;line-height:.98;margin:0 0 14px}.asia-theme p{font-size:27px;line-height:1.3;margin:0;max-width:800px;opacity:.7}.asia-theme .ap-foot{position:absolute;left:48px;right:48px;bottom:27px;border-top:1px solid #cbd5e1;padding-top:13px;display:flex;justify-content:space-between;font-size:15px;font-weight:800}"
  }
,
  {
    id: "market-world",
    name: "Market World",
    description: "International business and economy card with a financial editorial feel.",
    defaults: {
      "accentColor": "#16A34A",
      "bgColor": "#ffffff",
      "textColor": "#111827",
      "heading": "MARKET WORLD",
      "subheading": "Markets, business and economic developments to watch today.",
      "date": "08 October 2026",
      "domain": "example.com"
},
    html: "<div class=\"template-wrapper market-theme\" style=\"--accent:{accentColor};--bg:{bgColor};--text:{textColor};--font:'{font}';\">\n      <div class=\"mw-header\"><b>MARKET<span>WORLD</span></b><span>GLOBAL ECONOMY</span><span>{date}</span></div><div class=\"mw-photo\"><img src=\"{image}\" data-main-image=\"true\"><div class=\"mw-chip\">BUSINESS</div></div>\n      <div class=\"mw-bottom\"><div class=\"mw-index\">WORLD<br><strong>01</strong></div><div><h1>{heading}</h1><p>{subheading}</p></div></div><div class=\"mw-foot\">{domain}<span>BUSINESS / WORLD</span></div>\n    </div>",
    css: ".market-theme{width:1080px;height:1080px;background:#f3f6f3;color:var(--text);font-family:var(--font),sans-serif;padding:45px;position:relative;overflow:hidden}.market-theme .mw-header{height:82px;display:flex;align-items:center;gap:35px;border-bottom:2px solid #1f2937}.market-theme .mw-header b{font-size:30px}.market-theme .mw-header b span{color:var(--accent)}.market-theme .mw-header>span{font-size:15px;font-weight:800;opacity:.55}.market-theme .mw-header>span:last-child{margin-left:auto}.market-theme .mw-photo{height:515px;margin-top:28px;position:relative;overflow:hidden}.market-theme .mw-photo img{width:100%;height:100%;object-fit:cover}.market-theme .mw-chip{position:absolute;left:20px;top:20px;background:var(--accent);color:#fff;padding:9px 15px;font-size:15px;font-weight:900}.market-theme .mw-bottom{display:flex;gap:30px;padding-top:28px}.market-theme .mw-index{font-size:16px;font-weight:900;color:var(--accent);width:100px}.market-theme .mw-index strong{font-size:70px;line-height:.8}.market-theme h1{font-size:58px;line-height:1.02;margin:0 0 12px}.market-theme p{font-size:26px;line-height:1.3;margin:0;opacity:.68}.market-theme .mw-foot{position:absolute;left:45px;right:45px;bottom:25px;border-top:1px solid #cbd5e1;padding-top:12px;display:flex;justify-content:space-between;font-size:15px;font-weight:800}"
  }
,
  {
    id: "world-today",
    name: "World Today",
    description: "High-impact global-news square optimized for breaking and developing stories.",
    defaults: {
      "accentColor": "#2563EB",
      "bgColor": "#ffffff",
      "textColor": "#111827",
      "heading": "WORLD TODAY",
      "subheading": "What you need to know from the international news desk.",
      "date": "08 October 2026",
      "domain": "example.com"
},
    html: "<div class=\"template-wrapper world-today-theme\" style=\"--accent:{accentColor};--bg:{bgColor};--text:{textColor};--font:'{font}';\">\n      <div class=\"wt-top\"><div class=\"wt-logo\">W<span>T</span></div><div><b>WORLD TODAY</b><small>{date}</small></div><strong>LIVE</strong></div><div class=\"wt-photo\"><img src=\"{image}\" data-main-image=\"true\"></div><div class=\"wt-headline\"><span>TOP STORY</span><h1>{heading}</h1><p>{subheading}</p></div><div class=\"wt-ticker\">GLOBAL NEWS <i>•</i> {domain}</div>\n    </div>",
    css: ".world-today-theme{width:1080px;height:1080px;background:var(--bg);color:var(--text);font-family:var(--font),sans-serif;padding:42px;position:relative;overflow:hidden}.world-today-theme .wt-top{height:86px;display:flex;align-items:center;gap:16px}.world-today-theme .wt-logo{font-size:38px;font-weight:900;background:var(--accent);color:#fff;padding:6px 10px}.world-today-theme .wt-logo span{font-weight:300}.world-today-theme .wt-top b{display:block;font-size:23px}.world-today-theme .wt-top small{font-size:14px;opacity:.5}.world-today-theme .wt-top>strong{margin-left:auto;background:#111;color:#fff;padding:9px 15px;font-size:15px}.world-today-theme .wt-photo{height:515px;overflow:hidden}.world-today-theme .wt-photo img{width:100%;height:100%;object-fit:cover}.world-today-theme .wt-headline{padding:28px 8px}.world-today-theme .wt-headline>span{font-size:15px;font-weight:900;color:var(--accent);letter-spacing:2px}.world-today-theme h1{font-size:62px;line-height:1.02;margin:12px 0}.world-today-theme p{font-size:27px;line-height:1.3;margin:0;opacity:.7}.world-today-theme .wt-ticker{position:absolute;left:0;right:0;bottom:0;background:var(--accent);color:#fff;padding:18px 42px;font-weight:900;font-size:17px}.world-today-theme .wt-ticker i{padding:0 15px}"
  }
,
  {
    id: "congrats-elegant",
    name: "Congratulations — Elegant",
    description: "Premium congratulation card for jobs, promotions, awards and achievements.",
    defaults: {
      "accentColor": "#7C3AED",
      "bgColor": "#ffffff",
      "textColor": "#171717",
      "name": "Md. Rahim Hasan",
      "heading": "CONGRATULATIONS!",
      "subheading": "Warm wishes on your wonderful achievement.",
      "achievement": "Selected for the position of Assistant Manager",
      "message": "Wishing you continued success in your new journey.",
      "date": "08 October 2026",
      "domain": "example.com"
},
    html: "<div class=\"template-wrapper congrats-elegant-theme\" style=\"--accent:{accentColor};--bg:{bgColor};--text:{textColor};--font:'{font}';\">\n      <div class=\"ce-frame\"></div><div class=\"ce-photo\"><img src=\"{image}\" data-main-image=\"true\"></div><div class=\"ce-content\"><div class=\"ce-kicker\">A SPECIAL CONGRATULATIONS</div><h1>{name}</h1><h2>{achievement}</h2><p>{message}</p><div class=\"ce-divider\">✦</div><small>{date}</small></div><div class=\"ce-logo\"><img src=\"{logo}\"></div>\n    </div>",
    css: ".congrats-elegant-theme{width:1080px;height:1080px;background:var(--bg);color:var(--text);font-family:var(--font),sans-serif;position:relative;overflow:hidden;padding:55px}.congrats-elegant-theme .ce-frame{position:absolute;inset:25px;border:2px solid var(--accent);opacity:.5}.congrats-elegant-theme .ce-photo{height:420px;overflow:hidden;position:relative}.congrats-elegant-theme .ce-photo img{width:100%;height:100%;object-fit:cover}.congrats-elegant-theme .ce-content{text-align:center;padding:34px 45px}.congrats-elegant-theme .ce-kicker{font-size:16px;font-weight:900;letter-spacing:3px;color:var(--accent)}.congrats-elegant-theme h1{font-family:Georgia,serif;font-size:70px;line-height:1;margin:16px 0 12px}.congrats-elegant-theme h2{font-size:32px;margin:0 auto 17px;max-width:850px;color:var(--accent)}.congrats-elegant-theme p{font-size:25px;line-height:1.35;opacity:.7;margin:0 auto;max-width:780px}.congrats-elegant-theme .ce-divider{font-size:28px;color:var(--accent);margin:18px}.congrats-elegant-theme small{font-size:15px;opacity:.5}.congrats-elegant-theme .ce-logo{display:none}"
  }
,
  {
    id: "congrats-job",
    name: "New Job Congratulations",
    description: "Professional job-selection and appointment announcement card.",
    defaults: {
      "accentColor": "#2563EB",
      "bgColor": "#ffffff",
      "textColor": "#171717",
      "name": "Md. Rahim Hasan",
      "heading": "CONGRATULATIONS",
      "subheading": "Warm wishes on your wonderful achievement.",
      "achievement": "Selected for the position of Assistant Manager",
      "message": "Best wishes for a successful and rewarding career ahead.",
      "date": "08 October 2026",
      "domain": "example.com"
},
    html: "<div class=\"template-wrapper congrats-job-theme\" style=\"--accent:{accentColor};--bg:{bgColor};--text:{textColor};--font:'{font}';\">\n      <div class=\"cj-top\"><span>CAREER UPDATE</span><b>CONGRATULATIONS</b><span>{date}</span></div><div class=\"cj-main\"><div class=\"cj-photo\"><img src=\"{image}\" data-main-image=\"true\"><div class=\"cj-badge\">NEW<br>ROLE</div></div><div class=\"cj-copy\"><div class=\"cj-line\"></div><h1>{name}</h1><h2>{achievement}</h2><p>{message}</p></div></div><div class=\"cj-footer\"><span>{domain}</span><span>WISHING YOU SUCCESS</span></div>\n    </div>",
    css: ".congrats-job-theme{width:1080px;height:1080px;background:var(--bg);color:var(--text);font-family:var(--font),sans-serif;padding:45px;position:relative;overflow:hidden}.congrats-job-theme .cj-top{height:90px;display:flex;align-items:center;justify-content:space-between;border-bottom:2px solid var(--text);font-size:15px;font-weight:900;letter-spacing:1px}.congrats-job-theme .cj-top b{font-size:29px;color:var(--accent)}.congrats-job-theme .cj-main{display:flex;gap:45px;padding-top:42px}.congrats-job-theme .cj-photo{width:450px;height:620px;position:relative;overflow:hidden;background:#e5e7eb}.congrats-job-theme .cj-photo img{width:100%;height:100%;object-fit:cover}.congrats-job-theme .cj-badge{position:absolute;right:0;bottom:0;background:var(--accent);color:#fff;padding:17px 22px;text-align:center;font-weight:900;line-height:1.1}.congrats-job-theme .cj-copy{flex:1;padding-top:55px}.congrats-job-theme .cj-line{width:85px;height:8px;background:var(--accent);margin-bottom:28px}.congrats-job-theme h1{font-size:64px;line-height:1.02;margin:0 0 24px}.congrats-job-theme h2{font-size:31px;line-height:1.2;color:var(--accent);margin:0 0 24px}.congrats-job-theme p{font-size:25px;line-height:1.4;opacity:.68;margin:0}.congrats-job-theme .cj-footer{position:absolute;left:45px;right:45px;bottom:25px;border-top:1px solid #cbd5e1;padding-top:14px;display:flex;justify-content:space-between;font-size:15px;font-weight:800}"
  }
,
  {
    id: "congrats-gold",
    name: "Golden Achievement",
    description: "Celebratory gold-accent template for awards, jobs, promotions and milestones.",
    defaults: {
      "accentColor": "#D4A017",
      "bgColor": "#111111",
      "textColor": "#ffffff",
      "name": "Md. Rahim Hasan",
      "heading": "A GOLDEN MOMENT",
      "subheading": "Warm wishes on your wonderful achievement.",
      "achievement": "A remarkable new achievement",
      "message": "Your dedication has brought you to this proud moment. Congratulations!",
      "date": "08 October 2026",
      "domain": "example.com"
},
    html: "<div class=\"template-wrapper congrats-gold-theme\" style=\"--accent:{accentColor};--bg:{bgColor};--text:{textColor};--font:'{font}';\">\n      <div class=\"cg-orb\"></div><div class=\"cg-top\">ACHIEVEMENT <span>{date}</span></div><div class=\"cg-photo\"><img src=\"{image}\" data-main-image=\"true\"></div><div class=\"cg-copy\"><div class=\"cg-stars\">✦ ✦ ✦</div><h1>{name}</h1><h2>{achievement}</h2><p>{message}</p><div class=\"cg-sign\">{domain}</div></div>\n    </div>",
    css: ".congrats-gold-theme{width:1080px;height:1080px;background:var(--bg);color:var(--text);font-family:var(--font),sans-serif;position:relative;overflow:hidden;padding:55px}.congrats-gold-theme .cg-orb{position:absolute;width:420px;height:420px;border-radius:50%;border:1px solid var(--accent);right:-180px;top:-160px;box-shadow:0 0 0 40px rgba(212,160,23,.08),0 0 0 80px rgba(212,160,23,.04)}.congrats-gold-theme .cg-top{font-size:17px;font-weight:900;letter-spacing:3px;color:var(--accent);display:flex;justify-content:space-between}.congrats-gold-theme .cg-top span{color:#999;letter-spacing:0}.congrats-gold-theme .cg-photo{width:360px;height:360px;border-radius:50%;overflow:hidden;margin:52px auto 30px;border:8px solid var(--accent);box-shadow:0 0 0 12px rgba(212,160,23,.15)}.congrats-gold-theme .cg-photo img{width:100%;height:100%;object-fit:cover}.congrats-gold-theme .cg-copy{text-align:center}.congrats-gold-theme .cg-stars{color:var(--accent);font-size:24px;letter-spacing:10px}.congrats-gold-theme h1{font-size:64px;line-height:1;margin:18px 0 12px}.congrats-gold-theme h2{font-size:31px;color:var(--accent);margin:0 auto 15px;max-width:820px}.congrats-gold-theme p{font-size:24px;line-height:1.35;max-width:760px;margin:auto;color:#c7c7c7}.congrats-gold-theme .cg-sign{margin-top:24px;font-size:14px;letter-spacing:2px;color:#888}"
  }
,
  {
    id: "congrats-modern",
    name: "Modern Success",
    description: "Bold contemporary card for job success, promotions, graduation and awards.",
    defaults: {
      "accentColor": "#EC4899",
      "bgColor": "#ffffff",
      "textColor": "#171717",
      "name": "Md. Rahim Hasan",
      "heading": "YOU DID IT!",
      "subheading": "Warm wishes on your wonderful achievement.",
      "achievement": "Congratulations on your new success",
      "message": "A new chapter begins today. Keep moving forward!",
      "date": "08 October 2026",
      "domain": "example.com"
},
    html: "<div class=\"template-wrapper congrats-modern-theme\" style=\"--accent:{accentColor};--bg:{bgColor};--text:{textColor};--font:'{font}';\">\n      <div class=\"cm-big\">SUCCESS</div><div class=\"cm-photo\"><img src=\"{image}\" data-main-image=\"true\"></div><div class=\"cm-card\"><div class=\"cm-label\">CELEBRATE</div><h1>{name}</h1><h2>{achievement}</h2><p>{message}</p></div><div class=\"cm-date\">{date} · {domain}</div>\n    </div>",
    css: ".congrats-modern-theme{width:1080px;height:1080px;background:var(--bg);color:var(--text);font-family:var(--font),sans-serif;position:relative;overflow:hidden;padding:55px}.congrats-modern-theme .cm-big{position:absolute;top:5px;left:25px;font-size:205px;font-weight:900;line-height:.8;color:var(--accent);opacity:.08;letter-spacing:-10px}.congrats-modern-theme .cm-photo{position:absolute;top:105px;right:55px;width:520px;height:700px;overflow:hidden;transform:rotate(3deg);border:12px solid var(--bg);box-shadow:0 20px 50px rgba(0,0,0,.18)}.congrats-modern-theme .cm-photo img{width:100%;height:100%;object-fit:cover}.congrats-modern-theme .cm-card{position:absolute;left:70px;bottom:150px;width:650px;background:var(--bg);padding:35px 38px;box-shadow:0 12px 35px rgba(0,0,0,.1)}.congrats-modern-theme .cm-label{color:var(--accent);font-size:16px;font-weight:900;letter-spacing:3px}.congrats-modern-theme h1{font-size:67px;line-height:.95;margin:13px 0}.congrats-modern-theme h2{font-size:29px;line-height:1.2;margin:0 0 15px}.congrats-modern-theme p{font-size:22px;line-height:1.35;margin:0;opacity:.65}.congrats-modern-theme .cm-date{position:absolute;bottom:55px;left:70px;font-size:15px;font-weight:800;opacity:.55}"
  }
,
  {
    id: "congrats-ribbon",
    name: "Celebration Ribbon",
    description: "Festive ribbon-based congratulations card for any achievement.",
    defaults: {
      "accentColor": "#16A34A",
      "bgColor": "#ffffff",
      "textColor": "#171717",
      "name": "Md. Rahim Hasan",
      "heading": "CONGRATULATIONS!",
      "subheading": "Warm wishes on your wonderful achievement.",
      "achievement": "You have achieved something truly special",
      "message": "May this success be the beginning of many more.",
      "date": "08 October 2026",
      "domain": "example.com"
},
    html: "<div class=\"template-wrapper congrats-ribbon-theme\" style=\"--accent:{accentColor};--bg:{bgColor};--text:{textColor};--font:'{font}';\">\n      <div class=\"cr-ribbon\">CONGRATS</div><div class=\"cr-photo\"><img src=\"{image}\" data-main-image=\"true\"></div><div class=\"cr-copy\"><h1>{name}</h1><div class=\"cr-achieve\">{achievement}</div><p>{message}</p><div class=\"cr-seal\">★</div></div><div class=\"cr-foot\">{date} · {domain}</div>\n    </div>",
    css: ".congrats-ribbon-theme{width:1080px;height:1080px;background:var(--bg);color:var(--text);font-family:var(--font),sans-serif;position:relative;overflow:hidden;padding:55px}.congrats-ribbon-theme .cr-ribbon{position:absolute;top:65px;left:-115px;width:500px;background:var(--accent);color:#fff;text-align:center;padding:18px;transform:rotate(-35deg);font-size:24px;font-weight:900;letter-spacing:3px;box-shadow:0 8px 20px rgba(0,0,0,.18)}.congrats-ribbon-theme .cr-photo{width:380px;height:380px;border-radius:50%;overflow:hidden;margin:50px auto 30px;border:14px solid var(--accent)}.congrats-ribbon-theme .cr-photo img{width:100%;height:100%;object-fit:cover}.congrats-ribbon-theme .cr-copy{text-align:center}.congrats-ribbon-theme h1{font-size:65px;margin:0 0 16px;line-height:1}.congrats-ribbon-theme .cr-achieve{font-size:32px;font-weight:800;color:var(--accent);max-width:850px;margin:auto}.congrats-ribbon-theme p{font-size:25px;line-height:1.35;max-width:760px;margin:18px auto;color:#666}.congrats-ribbon-theme .cr-seal{margin:18px auto;width:58px;height:58px;border-radius:50%;display:grid;place-items:center;border:3px solid var(--accent);color:var(--accent);font-size:25px}.congrats-ribbon-theme .cr-foot{position:absolute;bottom:28px;left:55px;right:55px;text-align:center;font-size:15px;opacity:.55;font-weight:800}"
  }
,
  {
    id: "congrats-minimal",
    name: "Minimal Congratulations",
    description: "Minimal, clean achievement card suitable for professional announcements.",
    defaults: {
      "accentColor": "#111827",
      "bgColor": "#ffffff",
      "textColor": "#171717",
      "name": "Md. Rahim Hasan",
      "heading": "Congratulations",
      "subheading": "Warm wishes on your wonderful achievement.",
      "achievement": "On your well-deserved success",
      "message": "Wishing you confidence, growth and continued success.",
      "date": "08 October 2026",
      "domain": "example.com"
},
    html: "<div class=\"template-wrapper congrats-minimal-theme\" style=\"--accent:{accentColor};--bg:{bgColor};--text:{textColor};--font:'{font}';\">\n      <div class=\"cn-top\"><span>CELEBRATING YOU</span><span>{date}</span></div><div class=\"cn-photo\"><img src=\"{image}\" data-main-image=\"true\"></div><div class=\"cn-copy\"><div class=\"cn-small\">{heading}</div><h1>{name}</h1><h2>{achievement}</h2><p>{message}</p></div><div class=\"cn-bottom\">{domain}</div>\n    </div>",
    css: ".congrats-minimal-theme{width:1080px;height:1080px;background:var(--bg);color:var(--text);font-family:var(--font),sans-serif;padding:60px;position:relative;overflow:hidden}.congrats-minimal-theme .cn-top{display:flex;justify-content:space-between;font-size:14px;font-weight:800;letter-spacing:2px;opacity:.55}.congrats-minimal-theme .cn-photo{height:420px;margin-top:40px;overflow:hidden}.congrats-minimal-theme .cn-photo img{width:100%;height:100%;object-fit:cover}.congrats-minimal-theme .cn-copy{padding-top:34px}.congrats-minimal-theme .cn-small{font-size:17px;text-transform:uppercase;color:var(--accent);font-weight:900;letter-spacing:2px}.congrats-minimal-theme h1{font-size:70px;line-height:1;margin:10px 0 15px}.congrats-minimal-theme h2{font-size:30px;margin:0 0 14px;font-weight:600}.congrats-minimal-theme p{font-size:24px;line-height:1.35;max-width:800px;margin:0;opacity:.6}.congrats-minimal-theme .cn-bottom{position:absolute;bottom:30px;left:60px;right:60px;border-top:1px solid #d1d5db;padding-top:13px;font-size:14px;font-weight:800}"
  }
,
  {
    id: "congrats-premium",
    name: "Premium Success",
    description: "Luxury-style congratulation card for high-profile appointments and awards.",
    defaults: {
      "accentColor": "#B45309",
      "bgColor": "#F8F4EC",
      "textColor": "#292524",
      "name": "Md. Rahim Hasan",
      "heading": "WITH GREAT PLEASURE",
      "subheading": "Warm wishes on your wonderful achievement.",
      "achievement": "Congratulations on your outstanding achievement",
      "message": "Your hard work, patience and dedication have truly paid off.",
      "date": "08 October 2026",
      "domain": "example.com"
},
    html: "<div class=\"template-wrapper congrats-premium-theme\" style=\"--accent:{accentColor};--bg:{bgColor};--text:{textColor};--font:'{font}';\">\n      <div class=\"cp-border\"></div><div class=\"cp-head\">A MOMENT TO CELEBRATE</div><div class=\"cp-photo\"><img src=\"{image}\" data-main-image=\"true\"></div><div class=\"cp-content\"><div class=\"cp-crown\">♛</div><h1>{name}</h1><h2>{achievement}</h2><p>{message}</p><div class=\"cp-rule\"></div><small>{date} · {domain}</small></div>\n    </div>",
    css: ".congrats-premium-theme{width:1080px;height:1080px;background:var(--bg);color:var(--text);font-family:var(--font),sans-serif;position:relative;overflow:hidden;padding:50px}.congrats-premium-theme .cp-border{position:absolute;inset:25px;border:2px solid var(--accent)}.congrats-premium-theme .cp-head{text-align:center;font-size:15px;letter-spacing:5px;font-weight:900;color:var(--accent);padding-top:8px}.congrats-premium-theme .cp-photo{width:330px;height:330px;border-radius:50%;overflow:hidden;margin:55px auto 25px;border:5px solid var(--accent);padding:7px;background:var(--bg)}.congrats-premium-theme .cp-photo img{width:100%;height:100%;object-fit:cover;border-radius:50%}.congrats-premium-theme .cp-content{text-align:center}.congrats-premium-theme .cp-crown{font-size:32px;color:var(--accent)}.congrats-premium-theme h1{font-family:Georgia,serif;font-size:65px;margin:10px 0}.congrats-premium-theme h2{font-family:Georgia,serif;font-size:29px;color:var(--accent);max-width:820px;margin:0 auto 18px}.congrats-premium-theme p{font-size:23px;line-height:1.4;max-width:760px;margin:auto;opacity:.7}.congrats-premium-theme .cp-rule{height:1px;background:var(--accent);width:100px;margin:25px auto 13px}.congrats-premium-theme small{opacity:.55;font-size:14px}"
  }
,
  {
    id: "congrats-team",
    name: "Team Wishes",
    description: "Congratulation card for group success, promotions and team achievements.",
    defaults: {
      "accentColor": "#0891B2",
      "bgColor": "#ffffff",
      "textColor": "#171717",
      "name": "Md. Rahim Hasan",
      "heading": "TEAM CONGRATULATIONS",
      "subheading": "Warm wishes on your wonderful achievement.",
      "achievement": "Celebrating a fantastic achievement together",
      "message": "Proud of this milestone and excited for what comes next.",
      "date": "08 October 2026",
      "domain": "example.com"
},
    html: "<div class=\"template-wrapper congrats-team-theme\" style=\"--accent:{accentColor};--bg:{bgColor};--text:{textColor};--font:'{font}';\">\n      <div class=\"ct-photo\"><img src=\"{image}\" data-main-image=\"true\"><div class=\"ct-gradient\"></div><div class=\"ct-title\">{heading}</div></div><div class=\"ct-body\"><div class=\"ct-tag\">SUCCESS STORY</div><h1>{name}</h1><h2>{achievement}</h2><p>{message}</p></div><div class=\"ct-footer\"><span>{domain}</span><span>{date}</span></div>\n    </div>",
    css: ".congrats-team-theme{width:1080px;height:1080px;background:var(--bg);color:var(--text);font-family:var(--font),sans-serif;position:relative;overflow:hidden}.congrats-team-theme .ct-photo{height:560px;position:relative;overflow:hidden}.congrats-team-theme .ct-photo img{width:100%;height:100%;object-fit:cover}.congrats-team-theme .ct-gradient{position:absolute;inset:0;background:linear-gradient(transparent 35%,rgba(0,0,0,.75))}.congrats-team-theme .ct-title{position:absolute;left:50px;bottom:45px;color:#fff;font-size:54px;font-weight:900}.congrats-team-theme .ct-body{padding:40px 55px}.congrats-team-theme .ct-tag{display:inline-block;background:var(--accent);color:#fff;padding:8px 13px;font-size:14px;font-weight:900;letter-spacing:2px}.congrats-team-theme h1{font-size:62px;margin:14px 0 10px}.congrats-team-theme h2{font-size:30px;color:var(--accent);margin:0 0 15px}.congrats-team-theme p{font-size:24px;line-height:1.35;max-width:850px;margin:0;opacity:.68}.congrats-team-theme .ct-footer{position:absolute;bottom:25px;left:55px;right:55px;border-top:1px solid #cbd5e1;padding-top:13px;display:flex;justify-content:space-between;font-size:15px;font-weight:800}"
  }
,
  {
    id: "congrats-award",
    name: "Award Night",
    description: "Elegant award and recognition template for medals, prizes and honors.",
    defaults: {
      "accentColor": "#8B5CF6",
      "bgColor": "#171326",
      "textColor": "#ffffff",
      "name": "Md. Rahim Hasan",
      "heading": "HONORED & CELEBRATED",
      "subheading": "Warm wishes on your wonderful achievement.",
      "achievement": "Recipient of an Outstanding Achievement Award",
      "message": "Your excellence deserves to be recognized and celebrated.",
      "date": "08 October 2026",
      "domain": "example.com"
},
    html: "<div class=\"template-wrapper congrats-award-theme\" style=\"--accent:{accentColor};--bg:{bgColor};--text:{textColor};--font:'{font}';\">\n      <div class=\"ca-lines\"></div><div class=\"ca-top\">AWARDS & RECOGNITION <span>{date}</span></div><div class=\"ca-photo\"><img src=\"{image}\" data-main-image=\"true\"></div><div class=\"ca-copy\"><div class=\"ca-medal\">★</div><h1>{name}</h1><div class=\"ca-achievement\">{achievement}</div><p>{message}</p></div><div class=\"ca-foot\">{domain}</div>\n    </div>",
    css: ".congrats-award-theme{width:1080px;height:1080px;background:var(--bg);color:var(--text);font-family:var(--font),sans-serif;position:relative;overflow:hidden;padding:55px}.congrats-award-theme .ca-lines{position:absolute;inset:0;background:repeating-linear-gradient(135deg,transparent 0 90px,rgba(139,92,246,.07) 90px 92px)}.congrats-award-theme .ca-top{position:relative;font-size:15px;letter-spacing:3px;font-weight:900;color:var(--accent);display:flex;justify-content:space-between}.congrats-award-theme .ca-top span{color:#aaa;letter-spacing:0}.congrats-award-theme .ca-photo{position:relative;width:310px;height:310px;border-radius:50%;overflow:hidden;margin:45px auto 25px;border:7px solid var(--accent);box-shadow:0 0 0 12px rgba(139,92,246,.12)}.congrats-award-theme .ca-photo img{width:100%;height:100%;object-fit:cover}.congrats-award-theme .ca-copy{text-align:center;position:relative}.congrats-award-theme .ca-medal{width:60px;height:60px;border-radius:50%;display:grid;place-items:center;border:2px solid var(--accent);color:var(--accent);font-size:26px;margin:auto}.congrats-award-theme h1{font-size:64px;line-height:1;margin:15px 0}.congrats-award-theme .ca-achievement{font-size:30px;color:var(--accent);font-weight:800;max-width:850px;margin:auto}.congrats-award-theme p{font-size:23px;line-height:1.4;color:#bbb;max-width:760px;margin:15px auto}.congrats-award-theme .ca-foot{position:absolute;bottom:30px;left:55px;right:55px;text-align:center;font-size:14px;letter-spacing:2px;color:#888}"
  }
,
  {
    id: "congrats-fresh",
    name: "Fresh Start",
    description: "Bright, friendly success card for new jobs, admissions, graduation and milestones.",
    defaults: {
      "accentColor": "#F97316",
      "bgColor": "#FFF7ED",
      "textColor": "#431407",
      "name": "Md. Rahim Hasan",
      "heading": "NEW BEGINNING",
      "subheading": "Warm wishes on your wonderful achievement.",
      "achievement": "Congratulations on your exciting new journey!",
      "message": "May every step ahead bring learning, growth and happiness.",
      "date": "08 October 2026",
      "domain": "example.com"
},
    html: "<div class=\"template-wrapper congrats-fresh-theme\" style=\"--accent:{accentColor};--bg:{bgColor};--text:{textColor};--font:'{font}';\">\n      <div class=\"cf-sun\"></div><div class=\"cf-head\"><span>CHEERS TO YOU</span><span>{date}</span></div><div class=\"cf-photo\"><img src=\"{image}\" data-main-image=\"true\"></div><div class=\"cf-copy\"><div class=\"cf-label\">{heading}</div><h1>{name}</h1><h2>{achievement}</h2><p>{message}</p></div><div class=\"cf-foot\">{domain}</div>\n    </div>",
    css: ".congrats-fresh-theme{width:1080px;height:1080px;background:var(--bg);color:var(--text);font-family:var(--font),sans-serif;position:relative;overflow:hidden;padding:55px}.congrats-fresh-theme .cf-sun{position:absolute;width:500px;height:500px;border-radius:50%;background:var(--accent);opacity:.1;right:-170px;top:-180px}.congrats-fresh-theme .cf-head{display:flex;justify-content:space-between;font-size:15px;font-weight:900;letter-spacing:2px;color:var(--accent)}.congrats-fresh-theme .cf-head span:last-child{color:#9a3412;letter-spacing:0}.congrats-fresh-theme .cf-photo{height:420px;margin-top:45px;overflow:hidden;border-radius:30px}.congrats-fresh-theme .cf-photo img{width:100%;height:100%;object-fit:cover}.congrats-fresh-theme .cf-copy{text-align:center;padding:30px 20px}.congrats-fresh-theme .cf-label{font-size:17px;color:var(--accent);font-weight:900;letter-spacing:2px}.congrats-fresh-theme h1{font-size:67px;line-height:1;margin:12px 0}.congrats-fresh-theme h2{font-size:30px;margin:0 auto 14px;max-width:850px}.congrats-fresh-theme p{font-size:23px;line-height:1.35;max-width:760px;margin:auto;opacity:.65}.congrats-fresh-theme .cf-foot{position:absolute;bottom:28px;left:55px;right:55px;text-align:center;font-size:14px;font-weight:800;opacity:.5}"
  }
];
