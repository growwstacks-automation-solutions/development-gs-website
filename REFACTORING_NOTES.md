# JavaScript और CSS Separation - रीयूज़ के लिए

## 📋 की गई गई बदलाई

आपके `index.html` फाइल से सभी inline JavaScript और CSS को अलग फाइलों में निकाल दिया गया है:

### 1. **नई JavaScript फाइल**
📁 **Path:** `./assets/js/index.js`

**फंक्शनलिटी शामिल:**
- ✅ Image Carousel (3.5 सेकंड में स्वचलित स्लाइड)
- ✅ Sticky Navigation Shadow (scroll detect)
- ✅ FAQ Accordion (expand/collapse)
- ✅ Smooth Scroll (anchor links के लिए)
- ✅ Form Submission → Webhook + Redirect
- ✅ YouTube Lite Facade (click to load)

**फाइल साइज़:** कम (सभी inline scripts को एक में combine किया)

### 2. **नई CSS फाइल**
📁 **Path:** `./assets/css/homepage.css`

**Styles शामिल:**
- ✅ Float card labels styles
- ✅ Image object-fit utilities
- ✅ Case tag colors (peach, lavender, sky)
- ✅ Industry icon backgrounds (multiple colors)
- ✅ Video/image responsive styles
- ✅ Border radius utilities

### 3. **Updated index.html**
में से हटाया गया:
- ❌ सभी inline `<script>` tags (100+ lines)
- ❌ सभी inline styles (कुछ CSS में move हुए, कुछ reusable classes बन गए)

जोड़ा गया:
- ✅ `<link rel="stylesheet" href="./assets/css/homepage.css">` (head में)
- ✅ `<script src="./assets/js/index.js"></script>` (body के अंत में)

---

## 🔄 दूसरे Pages में रीयूज़ कैसे करें

### Option 1: सभी फंक्शनलिटी का रीयूज़
अगर दूसरे pages को भी यही सब चाहिए:

```html
<!-- Head में -->
<link rel="stylesheet" href="./../assets/css/homepage.css">

<!-- Body के अंत में -->
<script src="./../assets/js/index.js"></script>
```

### Option 2: सिर्फ कुछ फीचर्स चाहिए
अगर केवल specific features चाहिए, तो `index.js` को edit करके अपनी ज़रूरत के अनुसार function निकाल सकते हैं।

### Option 3: Shared JS बनाएं
Common functionality के लिए एक shared file बना सकते हैं:

```
_shared/
  ├── global.css (existing)
  ├── page-builder.js (existing)
  ├── site-config.js (existing)
  └── shared.js (नई - common functions)
```

---

## 📝 फाइल Path Structure

```
development-gs-website/
├── index.html (updated - external links के साथ)
├── assets/
│   ├── css/
│   │   ├── index.css (existing)
│   │   └── homepage.css (नई)
│   └── js/
│       └── index.js (नई)
├── _shared/
│   ├── global.css
│   ├── page-builder.js
│   └── site-config.js
└── [other pages...]
```

---

## ⚙️ Configuration की ज़रूरत

### Webhook URL Update करें
`assets/js/index.js` में line ~61 पर:

```javascript
const webhookUrl = 'YOUR_WEBHOOK_URL_HERE';
```

इसे अपने actual webhook URL से replace करें (Make.com, n8n, Zapier, etc.)

---

## ✅ Advantages

1. **Performance:** Separate caching of CSS & JS
2. **Maintainability:** Code organization बेहतर
3. **Reusability:** किसी भी page में link करके use कर सकते हैं
4. **Scalability:** नए pages आसानी से add कर सकते हैं
5. **Clean HTML:** index.html 40-50% छोटा हो गया

---

## 🧪 Testing Checklist

- [ ] Image carousel काम कर रहा है (3.5s में switch)
- [ ] Navigation scroll shadow काम कर रहा है
- [ ] FAQ accordion काम कर रहा है
- [ ] Smooth scroll anchor links काम कर रहे हैं
- [ ] Form submit webhook को data भेज रहा है
- [ ] YouTube videos lazy load हो रहे हैं (click पर)
- [ ] Styles सही से apply हो रहे हैं

---

## 📚 Further Optimization

भविष्य में अगर और optimization चाहे:

1. **Minification:** CSS और JS को minify करें
2. **Lazy Loading:** JS को async/defer करें
3. **Code Splitting:** बड़ी functionality को अलग files में करें
4. **CSS Variables:** अधिक reusable बनाएं

---

**Last Updated:** 19 February 2026
**Branch:** new_developer
