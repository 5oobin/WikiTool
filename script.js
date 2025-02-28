//comment select
function selectAllComments() {
  const selectAll = document.getElementById('selectAll');
  const checkboxes = document.querySelectorAll('.comment-checkbox');
  checkboxes.forEach(checkbox => {
      checkbox.checked = selectAll.checked;
  });
}


//label select
document.querySelector("label[for='selectAll']").addEventListener('click', (event) => {
  event.preventDefault();
  const selectAll = document.getElementById('selectAll');
  selectAll.checked = !selectAll.checked;
  selectAllComments();
});

document.querySelector("label[for='withUsername']").addEventListener('click', (event) => {
  event.preventDefault();
  const withUsername = document.getElementById('withUsername');
  withUsername.checked = !withUsername.checked;
});


//what's this about
function toggleModal() {
  const modal = document.getElementById('newModal');
  const aboutButton = document.querySelector('.about-button');

  const isModalVisible = modal.style.display === 'block';
  modal.style.display = isModalVisible ? 'none' : 'block';
  aboutButton.classList.toggle('active', !isModalVisible);
}

// 페이지 로드 시 about-button을 active 상태로 설정
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById('newModal');
  const aboutButton = document.querySelector('.about-button');

  modal.style.display = 'block';

  aboutButton.classList.add('active');
});


//tabs
function showTab(tab) {
  // 모든 탭 콘텐츠 숨기기
  document.querySelectorAll(".tab-content").forEach(section => {
      section.style.display = "none"; // 완전히 숨김
  });

  // 모든 버튼에서 active 클래스 제거
  document.querySelectorAll(".tab-button").forEach(button => {
      button.classList.remove("active");
  });

  // 선택된 탭 콘텐츠 보이기
  const targetSection = document.getElementById(tab + "-section");
  if (targetSection) {
      targetSection.style.display = "block"; // 선택된 탭만 보이게 함
  }

  // 클릭한 버튼에 active 클래스 추가
  document.querySelector(`.tab-button[onclick="showTab('${tab}')"]`)?.classList.add("active");

  // Summary 탭일 때와 아닐 때의 처리를 분리
  const summarySection = document.querySelector(".summary-section");
  const linkSection = document.querySelector(".link-section");
  const historyButtons = document.querySelectorAll(".history-button");

  if (tab === "summary") {
      // summary 탭 선택 시 summary-section의 모든 스타일을 원래대로 복원
      summarySection.style.display = "flex";       // flex로 설정하여 레이아웃 유지
      summarySection.style.visibility = "visible";   // 다시 보이게 함
      summarySection.style.height = "auto";          // 높이 복원 (또는 빈 문자열)

      linkSection.style.display = "flex";            // link-section도 flex로 보이게 함

      historyButtons.forEach(button => {
          button.style.display = "block";            // history 버튼 보이게 함
      });
  } else {
      // summary 탭이 아닌 경우 summary-section과 link-section 숨김
      summarySection.style.display = "none";
      linkSection.style.display = "none";

      historyButtons.forEach(button => {
          button.style.display = "none";
      });
  }
}


document.addEventListener("DOMContentLoaded", function () {
  showTab('summary');
  // 초기 summary 섹션을 비워두고 메시지를 표시합니다.
  document.getElementById('summary').innerHTML = `<p>Please select comments to summarize.</p>`;
  // 링크 섹션도 빈 문자열로 초기화합니다.
  document.getElementById('external-sources').innerHTML = '';
  document.getElementById('inter-wiki-links').innerHTML = '';
  document.getElementById('wiki-policies').innerHTML = '';
});


document.getElementById('chat-box').addEventListener('submit', function(e) {
  e.preventDefault(); // 폼 제출 후 페이지 새로고침 방지

  const chatInput = document.getElementById('chat-input');
  const message = chatInput.value.trim();
  if (message === "") return; // 빈 메시지는 무시

  const chatHistory = document.getElementById('chat-history');
  
  // 새로운 메시지 요소 생성
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message');
  messageElement.textContent = message;

  // chat-history 하단에 메시지 추가
  chatHistory.appendChild(messageElement);

  // 스크롤을 맨 아래로 이동시킴
  chatHistory.scrollTop = chatHistory.scrollHeight;

  // 입력 필드 초기화
  chatInput.value = "";
});


//highlight text
function highlightText(elementIds) {
  document.querySelectorAll('.highlight').forEach(element => {
    element.classList.remove('highlight');
  });

  elementIds.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.add('highlight');
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}


//summary versions
const originalSummary = `
<p>
    The discussion revolves around whether French is an official language of Vatican City.
    <span class="summary" onclick="highlightText(['comment2-sentence2', 'comment3-sentence3'])">One side argues that French, along with Italian and Latin, is an official language, citing sources like Vatican News and France Diplomatie, which refer to French as an official language for diplomacy and note the Vatican’s recognition as a French-speaking state.</span>
    <span class="summary" onclick="highlightText(['comment2-sentence4', 'comment6-sentence2', 'comment6-sentence4', 'comment6-sentence5', 'comment6-sentence3'])">The other side challenges these sources, asserting that only Italian is the official language of Vatican City, with Latin serving internal legal purposes, and that French is merely a diplomatic working language.</span>
    <span class="summary" onclick="highlightText(['comment2-sentence1', 'comment2-sentence3', 'comment2-sentence4', 'comment4-sentence4', 'comment4-sentence9', 'comment6-sentence1', 'comment6-sentence6', 'comment4-sentence7', 'comment6-sentence8'])">They argue that sources like France Diplomatie do not support French as an official state language, and emphasize that Wikipedia guidelines require reliance on Vatican-specific legal sources for determining official status.</span>
    <span class="summary" onclick="highlightText(['comment2-sentence1', 'comment4-sentence9', 'comment4-sentence11'])">The dispute also addresses the use of Wikipedia and non-Vatican sources, with one party rejecting them as unreliable, leading to a call for consensus and proper citation before any changes are made to the article.</span>
</p>
`;

const summaryWithUsername = `
<p>
    <span class="summary" onclick="highlightText(['comment3-sentence2', 'comment3-sentence3'])">France-Pt9301 argues that French is an official language of Vatican City, citing Vatican News, France Diplomatie, and the Vatican’s membership in the Organisation Internationale de la Francophonie.</span>
    <span class="summary" onclick="highlightText(['comment5-sentence5'])">They point out that French is used in diplomacy, similar to other countries where less-spoken languages are official.</span>
    <span class="summary" onclick="highlightText(['comment2-sentence2', 'comment2-sentence3', 'comment2-sentence4'])">In response, OhNoitsJamie disagrees, claiming that only Italian and Latin are official languages, with French serving as a diplomatic language, citing a Google translation of a source that lists German as the Swiss Guard's working language.</span>
    <span class="summary" onclick="highlightText(['comment4-sentence4', 'comment4-sentence3', 'comment4-sentence9'])">Moalli further rejects the sources presented by France-Pt9301, arguing that Wikipedia and external websites like France Diplomatie are not reliable for confirming official status.</span>
    <span class="summary" onclick="highlightText(['comment6-sentence2', 'comment4-sentence7', 'comment5-sentence5'])">Moalli insists that French is only a working language for diplomacy, not official for state communications, and accuses France-Pt9301 of misrepresenting the meaning of “official language.”</span>
    <span class="summary" onclick="highlightText(['comment6-sentence8', 'comment6-sentence9', 'comment5-sentence7'])">Moalli also mentions France-Pt9301's involvement in edit warring, advising them to wait for consensus before making further changes.</span>
</p>
`;

const oneUserSummary = `
<p>
    The debate centers on whether French should be recognized as an official language of the Vatican.
    <span class="summary" onclick="highlightText(['comment3-sentence2'])">One editor argues that French is an official language, citing French Wikipedia, Vatican News, and diplomatie.gouv.fr as reliable sources, noting the Vatican’s diplomatic use of French and its recognition by international bodies like the Organisation Internationale de la Francophonie.</span>
    <span class="summary" onclick="highlightText(['comment5-sentence4'])">They acknowledge French is not the most spoken language in the Vatican but maintain it holds official status.</span>
    <span class="summary" onclick="highlightText(['comment2-sentence1', 'comment4-sentence3', 'comment3-sentence2', 'comment5-sentence2'])">The opposing editor challenges the use of French Wikipedia as a source, questioning its reliability.</span>
    <span class="summary" onclick="highlightText(['comment5-sentence2', 'comment5-sentence4', 'comment5-sentence5'])">In response, the first editor defends the credibility of Vatican News, a Vatican-affiliated outlet, and argues that the status of French in the Vatican is similar to other countries, like Vanuatu, where French is official despite being spoken by a minority.</span>
</p>
`;

const oneUserSummaryWithUsername = `
<p>
    <span class="summary" onclick="highlightText(['comment1-sentence3', 'comment3-sentence2'])">In the discussion, France-Pt9301 justifies their edit that French is an official language of the Vatican, citing French Wikipedia, Vatican News, and diplomatie.gouv.fr as sources.</span>
    <span class="summary" onclick="highlightText(['comment1-sentence3', 'comment3-sentence3', 'comment3-sentence2'])">They argue that French is used diplomatically by the Vatican and that international organizations, such as the Organisation Internationale de la Francophonie, recognize the Vatican as a French-speaking entity.</span>
    <span class="summary" onclick="highlightText(['comment5-sentence4'])">Acknowledging French is less commonly spoken within the Vatican, they clarify it still holds official status.</span>
    <span class="summary" onclick="highlightText(['comment2-sentence1', 'comment2-sentence3', 'comment2-sentence4', 'comment3-sentence2', 'comment5-sentence2', 'comment5-sentence3'])">Ohnoitsjamie questions the use of French Wikipedia as a source and suggests it’s not reliable, but France-Pt9301 defends it by pointing out that Vatican News, a credible Vatican outlet, supports the claim.</span>
    <span class="summary" onclick="highlightText(['comment5-sentence5'])">They also mention that French’s status as an official language, despite being less spoken, is similar to examples like Vanuatu, where French is an official language but spoken by a minority.</span>
</p>
`;

const oneCommentSummary = `
<p>
    The discussion revolves around whether French should be classified as an official language of Vatican City.
    <span class="summary" onclick="highlightText(['comment6'])">One editor argues that Italian is the only official language, with Latin used for internal governance, while French is only a working language in diplomacy.</span>
    <span class="summary" onclick="highlightText(['comment6'])">They assert that French has no official status, citing the absence of legal sources or ordinances confirming it as official.</span>
    <span class="summary" onclick="highlightText(['comment6'])">They also criticize the article’s reliance on a single source that conflates official language with working language.</span>
    <span class="summary" onclick="highlightText(['comment6'])">This source is deemed unreliable, as it does not distinguish between the two roles.</span>
    <span class="summary" onclick="highlightText(['comment6'])">The editor further claims that a consensus has already formed among multiple users rejecting French as an official language.</span>
    <span class="summary" onclick="highlightText(['comment6'])">The argument also includes a procedural issue, with one editor accusing another of violating the 3-revert rule and urging them to respect the consensus before making further edits.</span>
</p>
`;

const oneCommentSummaryWithUsername = `
<p>
    <span class="summary" onclick="highlightText(['comment6'])">User Moalli argues that the article incorrectly labels French as an official language of Vatican City, stating that Italian is the only official language, with Latin used for internal governance.</span>
    <span class="summary" onclick="highlightText(['comment6'])">Moalli cites the lack of legal sources to support French’s official status, referencing the Vanuatu constitution as a contrast, where French is clearly an official language.</span>
    <span class="summary" onclick="highlightText(['comment6'])">Moalli points out that French is a working language for diplomacy, not official, and claims the article conflates the two.</span>
    <span class="summary" onclick="highlightText(['comment6'])">They accuse User X of violating the Wikipedia 3RR rule by repeatedly reverting edits, despite a consensus that French is not official.</span>
    <span class="summary" onclick="highlightText(['comment6'])">Moalli emphasizes that the current sources, which conflate official and working languages, are insufficient and urges that a consensus be reached, rather than continuing to push personal opinions without proper sourcing.</span>
</p>
`;

//summary list
const summaryList = [
  {summary: originalSummary, links: null},
  {summary: summaryWithUsername, links: null},
  {
    summary: oneUserSummary,
    links: {
        external: `
            <ul>
                <li><span class="summary" onclick="highlightText(['comment1-sentence3'])">French Wikipedia</span> [<a href="https://fr.m.wikipedia.org/wiki/Langues_au_Vatican#:~:text=Les%20langues%20officielles%20du%20Vatican,des%20organisations%20internationales">↗</a>]</li>
                <li><span class="summary" onclick="highlightText(['comment1-sentence3'])">Vatican News</span> [<a href="https://www.vaticannews.va/fr/vatican/news/2019-03/vatican-saint-siege-francophonie-langue-francais.html">↗</a>]</li>
                <li><span class="summary" onclick="highlightText(['comment1-sentence3', 'comment4-sentence8'])">France Diplomatie</span> [<a href="https://www.diplomatie.gouv.fr/fr/dossiers-pays/vatican-saint-siege/presentation-du-vatican/article/presentation-du-vatican">↗</a>]</li>
            </ul>
        `,
        interWiki: '',
        policies: ''
    }
  },
  {
    summary: oneUserSummaryWithUsername,
    links: {
      external: `
            <ul>
                <li><span class="summary" onclick="highlightText(['comment1-sentence3'])">French Wikipedia</span> [<a href="https://fr.m.wikipedia.org/wiki/Langues_au_Vatican#:~:text=Les%20langues%20officielles%20du%20Vatican,des%20organisations%20internationales">↗</a>]</li>
                <li><span class="summary" onclick="highlightText(['comment1-sentence3'])">Vatican News</span> [<a href="https://www.vaticannews.va/fr/vatican/news/2019-03/vatican-saint-siege-francophonie-langue-francais.html">↗</a>]</li>
                <li><span class="summary" onclick="highlightText(['comment1-sentence3', 'comment4-sentence8'])">France Diplomatie</span> [<a href="https://www.diplomatie.gouv.fr/fr/dossiers-pays/vatican-saint-siege/presentation-du-vatican/article/presentation-du-vatican">↗</a>]</li>
            </ul>
      `,
      interWiki: '',
      policies: ''
    }
  },
  {
    summary: oneCommentSummary,
    links: {
        external: '',
        interWiki: '',
        policies: `
            <ul>
                <li><span class="summary" onclick="highlightText(['comment6-sentence8'])">WP:3RR</span> [<a href="https://en.wikipedia.org/wiki/Wikipedia:3RR">↗</a>]</li>
            </ul>
        `
    }
  },
  {
    summary: oneCommentSummaryWithUsername,
    links: {
        external: '',
        interWiki: '',
        policies: `
            <ul>
                <li><span class="summary" onclick="highlightText(['comment6-sentence8'])">WP:3RR</span> [<a href="https://en.wikipedia.org/wiki/Wikipedia:3RR">↗</a>]</li>
            </ul>
        `
    }
  }
];


//update summary
let initialExternalHTML = null;
let initialInterWikiHTML = null;
let initialWikiPoliciesHTML = null;
let currentIndex = 0;

function updateSummaryContent() {
    const currentData = summaryList[currentIndex];
    const summaryBox = document.getElementById('summary');
    const leftButton = document.querySelector(".history-button.left");
    const rightButton = document.querySelector(".history-button.right");
    const externalSources = document.getElementById('external-sources');
    const interWikiLinks = document.getElementById('inter-wiki-links');
    const wikiPolicies = document.getElementById('wiki-policies');

    if (!initialExternalHTML) {
      initialExternalHTML = externalSources.innerHTML;
      initialInterWikiHTML = interWikiLinks.innerHTML;
      initialWikiPoliciesHTML = wikiPolicies.innerHTML;
    }

    summaryBox.innerHTML = currentData.summary;

    if (currentData.links) {
      externalSources.innerHTML = currentData.links.external || '';
      interWikiLinks.innerHTML = currentData.links.interWiki || '';
      wikiPolicies.innerHTML = currentData.links.policies || '';
    } else {
      externalSources.innerHTML = initialExternalHTML;
      interWikiLinks.innerHTML = initialInterWikiHTML;
      wikiPolicies.innerHTML = initialWikiPoliciesHTML;
    }

    leftButton.style.display = currentIndex === 0 ? "none" : "block";
    rightButton.style.display = currentIndex === summaryList.length - 1 ? "none" : "block";
}

function summarizeSelected() {
    showTab('summary');
    
    const withUsername = document.getElementById('withUsername').checked;
    const selectAll = document.getElementById('selectAll').checked;
    const selectedComments = Array.from(document.querySelectorAll('.comment-checkbox')).filter(cb => cb.checked);
    const count = selectedComments.length;

    if (selectAll) {
      currentIndex = withUsername ? 1 : 0;
    } else if (count >=2) {
      currentIndex = withUsername ? 3 : 2;
    } else if (count === 1) {
      currentIndex = withUsername ? 5 : 4;
    } else {
        document.getElementById('summary').innerHTML = `<p>Please select comments to summarize.</p>`;
        document.getElementById('external-sources').innerHTML = '';
        document.getElementById('inter-wiki-links').innerHTML = '';
        document.getElementById('wiki-policies').innerHTML = '';
        return;
    }

    updateSummaryContent();
}

function showRecentText() {
  if (currentIndex > 0) {
      currentIndex -= 1;
      updateSummaryContent();
  }
}

function showOlderText() {
    if (currentIndex < summaryList.length - 1) {
        currentIndex += 1;
        updateSummaryContent();
    }
}

updateSummaryContent();