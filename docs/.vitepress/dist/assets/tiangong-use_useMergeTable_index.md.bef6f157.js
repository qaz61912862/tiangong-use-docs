import{_ as t,r as p,c as o,d as e,a as n,b as s,e as c,o as l}from"./app.88d06699.js";const v='{"title":"useMergeTable","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Type Declarations","slug":"type-declarations"}],"relativePath":"tiangong-use/useMergeTable/index.md","lastUpdated":1636451210214}',u={},k=n("h1",{id:"usemergetable",tabindex:"-1"},[s("useMergeTable "),n("a",{class:"header-anchor",href:"#usemergetable","aria-hidden":"true"},"#")],-1),i=n("p",null,"Parallel according to the same column combination for ElTable",-1),r=n("h2",{id:"usage",tabindex:"-1"},[s("Usage "),n("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#")],-1),g=c(`<div class="language-tsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useMergeTable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@tiangong/use&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">IListItem</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  sale<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> mergeColFn <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;\u6797\u4E00&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token string">&#39;18&#39;</span><span class="token punctuation">,</span> sale<span class="token operator">:</span> <span class="token string">&#39;800.00&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;\u5C0F\u4E8C&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token string">&#39;28&#39;</span><span class="token punctuation">,</span> sale<span class="token operator">:</span> <span class="token string">&#39;900.00&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token string">&#39;18&#39;</span><span class="token punctuation">,</span> sale<span class="token operator">:</span> <span class="token string">&#39;1900.00&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;\u674E\u56DB&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token string">&#39;33&#39;</span><span class="token punctuation">,</span> sale<span class="token operator">:</span> <span class="token string">&#39;400.00&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> name<span class="token operator">:</span> <span class="token string">&#39;\u738B\u4E94&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">,</span> sale<span class="token operator">:</span> <span class="token string">&#39;200.00&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> mergeCol <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useMergeTable</span><span class="token generic class-name"><span class="token operator">&lt;</span>IListItem<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
        list<span class="token punctuation">,</span> <span class="token string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      mergeColFn<span class="token punctuation">.</span>value <span class="token operator">=</span> mergeCol
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      list<span class="token punctuation">,</span>
      mergeColFn<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table</span>
        <span class="token attr-name">border</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">}</span></span>
        <span class="token attr-name">spanMethod</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>mergeColFn<span class="token punctuation">}</span></span>
      <span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u8BA2\u5355\u53F7<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>120<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u59D3\u540D<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u59D3\u540D<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>age<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
          <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u9500\u552E\u989D<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sale<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="type-declarations" tabindex="-1">Type Declarations <a class="header-anchor" href="#type-declarations" aria-hidden="true">#</a></h2><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">useMergeTable</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">,</span> mergeColumns<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">mergeCol</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> column<span class="token punctuation">,</span> rowIndex<span class="token punctuation">,</span> columnIndex <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        row<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
        column<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
        rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
        columnIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        rowspan<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
        colspan<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre></div>`,3);function d(m,b,_,f,h,y){const a=p("d-use-merge-table");return l(),o("div",null,[k,i,r,e(a),g])}var w=t(u,[["render",d]]);export{v as __pageData,w as default};
