/**
 * GRURU MUSEUM — Interactive Engine
 * Modules:
 * 1. Data Booming Radial Exploration Engine
 * 2. Force-Directed Interactive Knowledge Graph (Canvas)
 * 3. Everyday Lab Takeaway Interactions
 * 4. Specimen Dossier Drawer
 */

// =============================================================================
// 1. DATA BOOMING RADIAL EXPLORATION ENGINE (HALL 02)
// =============================================================================

const BOOMING_SEEDS = {
  med: {
    id: "BOOM-SEED-01",
    title: "ภูมิปัญญาการแพทย์และสมุนไพรไทย",
    cat: "วัฒนธรรม & ภูมิปัญญา",
    color: "#FFC233",
    desc: "รากเหง้าเวชศาสตร์โบราณ บันทึกจารึกวัดโพธิ์ และกลไกเภสัชวิทยาสมัยใหม่",
    children: [
      { id: "NODE-M1", title: "ฟ้าทะลายโจร (Andrographis)", cat: "วิทยาศาสตร์", color: "#2EE6FF", desc: "สารแอนโดรกราโฟไลด์ยับยั้งการแบ่งตัวของไวรัส", takeaway: "ทานสารสกัดทันทีที่เริ่มมีอาการไข้หวัด", level2: [
        { title: "กลไกยับยั้ง Viral RNA", cat: "วิทยาศาสตร์", color: "#2EE6FF" },
        { title: "การทดลองทางคลินิกระดับชาติ", cat: "เทคโนโลยี", color: "#8C6BFF" }
      ]},
      { id: "NODE-M2", title: "จารึกแผนหัตถเวช วัดโพธิ์", cat: "ประวัติศาสตร์", color: "#FF5A1F", desc: "คัมภีร์แผนโบราณสลักบนศิลาในรัชกาลที่ 3 พ.ศ. 2375", takeaway: "ท่ายืดเหยียดฤๅษีดัดตนลดอาการออฟฟิศซินโดรม", level2: [
        { title: "รัชสมัยพระบาทสมเด็จพระนั่งเกล้าฯ", cat: "ประวัติศาสตร์", color: "#FF5A1F" },
        { title: "การแพทย์ราชสำนักสยาม", cat: "วัฒนธรรม", color: "#FFC233" }
      ]},
      { id: "NODE-M3", title: "ขมิ้นชัน & เคอร์คูมินอยด์", cat: "ธรรมชาติ", color: "#34E89E", desc: "สารต้านอนุมูลอิสระเข้มข้น ลดการอักเสบในทางเดินอาหาร", takeaway: "ดื่มน้ำต้มขมิ้นชันอุ่นๆ หลังมื้ออาหารที่มีไขมันสูง" },
      { id: "NODE-M4", title: "น้ำมันนวดไพลบริสุทธิ์", cat: "วัฒนธรรม", color: "#FFC233", desc: "สารเคมีธรรมชาติ Compound D ฤทธิ์ลดปวดกล้ามเนื้อเรื้อรัง", takeaway: "ประคบอุ่นด้วยไพลบรรเทาอาการเคล็ดขัดยอก" },
      { id: "NODE-M5", title: "ระบบชีวเภสัชภัณฑ์แห่งชาติ", cat: "เทคโนโลยี", color: "#8C6BFF", desc: "การแปลงภูมิปัญญาพื้นบ้านสู่มาตรฐาน GMP/FDA สากล", takeaway: "เลือกซื้อสมุนไพรที่มีมาตรฐานฮาลาล/อย. รับรอง" },
      { id: "NODE-M6", title: "จิตรกรรมหอเวชศาสตร์", cat: "ศิลปะ", color: "#FF5FA2", desc: "ภาพจำลองสมุนไพรและจุดชีพจรโบราณในหอพระสมุด", takeaway: "ชมภาพสเกตช์สมุนไพรแท้ได้ที่หอสมุดแห่งชาติ" },
      { id: "NODE-M7", title: "พฤกษศาสตร์พื้นบ้านดงพญาเย็น", cat: "ธรรมชาติ", color: "#34E89E", desc: "แหล่งรวบรวมความหลากหลายทางชีวภาพของพืชสมุนไพรหายาก", takeaway: "สนับสนุนการอนุรักษ์พื้นที่ป่าต้นน้ำพันธุกรรมพืช" },
      { id: "NODE-M8", title: "สรีรวิทยาระบบประสาทบำบัด", cat: "วิทยาศาสตร์", color: "#2EE6FF", desc: "การเชื่อมโยงระหว่างจุดกดประสาทกับคลื่นสมอง Alpha wave", takeaway: "กดจุดระหว่างคิ้ว 30 วินาที ช่วยคลายความเครียดสะสม" }
    ]
  },
  astro: {
    id: "BOOM-SEED-02",
    title: "ดาราศาสตร์สยาม & การคำนวณสุริยุปราคา",
    cat: "วิทยาศาสตร์ & ประวัติศาสตร์",
    color: "#2EE6FF",
    desc: "การคำนวณพิกัดดาราศาสตร์ล่วงหน้า ณ หว้ากอ ประจวบคีรีขันธ์ พ.ศ. 2411",
    children: [
      { id: "NODE-A1", title: "สุริยุปราคาเต็มดวง ณ หว้ากอ", cat: "ประวัติศาสตร์", color: "#FF5A1F", desc: "การคำนวณตำแหน่งดวงจันทร์บดบังดวงอาทิตย์ล่วงหน้า 2 ปี โดย ร.4", takeaway: "ความแม่นยำของวิทยาศาสตร์สร้างเอกราชทางการทูต" },
      { id: "NODE-A2", title: "คัมภีร์สุริยยาตร์โบราณ", cat: "วัฒนธรรม", color: "#FFC233", desc: "ตำราคำนวณการโคจรของดาวเคราะห์และพระอาทิตย์ดั้งเดิม", takeaway: "คณิตศาสตร์ดั้งเดิมมีความแม่นยำทางสถิติสูง" },
      { id: "NODE-A3", title: "กล้องโทรทรรศน์สะท้อนแสงสยาม", cat: "เทคโนโลยี", color: "#8C6BFF", desc: "อุปกรณ์สำรวจดวงดาวที่สั่งซื้อจากฝรั่งเศสและอังกฤษ", takeaway: "เปิดรับเทคโนโลยีระดับโลกเพื่อยืนยันข้อเท็จจริง" },
      { id: "NODE-A4", title: "การคำนวณละติจูด-ลองจิจูด", cat: "วิทยาศาสตร์", color: "#2EE6FF", desc: "พิกัด 11° 43' N ของค่ายหว้ากอ เป็นจุดศูนย์กลางคราสเต็มดวง", takeaway: "พิกัดภูมิศาสตร์คือหัวใจของความมั่นคงและแผนที่" },
      { id: "NODE-A5", title: "หอดูดาวสันเปาโล อยุธยา", cat: "ประวัติศาสตร์", color: "#FF5A1F", desc: "หอดูดาวสากลแห่งแรกในสมัยสมเด็จพระนารายณ์มหาราช", takeaway: "สยามมีการติดต่อทางวิทยาศาสตร์กับยุโรปกว่า 300 ปี" },
      { id: "NODE-A6", title: "ปรากฏการณ์โคโรนาของดวงอาทิตย์", cat: "วิทยาศาสตร์", color: "#2EE6FF", desc: "ชั้นบรรยากาศสุริยะที่ถูกบันทึกภาพถ่ายเป็นครั้งแรกในสยาม", takeaway: "การสังเกตธรรมชาติช่วยขยายพรมแดนความรู้ฟิสิกส์" }
    ]
  },
  arch: {
    id: "BOOM-SEED-03",
    title: "สถาปัตยกรรมไม้เข้าสลักต้านแผ่นดินไหว",
    cat: "เทคโนโลยี & ศิลปะ",
    color: "#8C6BFF",
    desc: "วิศวกรรมเรือนไทยโบราณ ไร้ตะปู และโครงสร้างยืดหยุ่นกระจายแรงสั่นสะเทือน",
    children: [
      { id: "NODE-R1", title: "ระบบสลักเดือยไม้ (Mortise & Tenon)", cat: "เทคโนโลยี", color: "#8C6BFF", desc: "การเชื่อมโครงสร้างไม้ด้วยเดือยล็อคที่สามารถให้ตัวได้ 2-3 มม.", takeaway: "ความยืดหยุ่นในโครงสร้างทนทานกว่าความแข็งขืน" },
      { id: "NODE-R2", title: "เสาเอียงสอบเข้า (Entasis columns)", cat: "ศิลปะ", color: "#FF5FA2", desc: "เทคนิคการตั้งเสาเอียงเข้าศูนย์กลาง เพื่อความมั่นคงทางฟิสิกส์", takeaway: "รูปทรงสมมาตรที่เอียงเล็กน้อยช่วยรับแรงลมได้ดีกว่า" },
      { id: "NODE-R3", title: "หลังคาหน้าจั่วทรงสูงระบายอากาศ", cat: "ธรรมชาติ", color: "#34E89E", desc: "หลักการพาความร้อนตามธรรมชาติ ชายคายาวกันแดดฝนเขตร้อน", takeaway: "การออกแบบที่เข้ากับธรรมชาติช่วยประหยัดพลังงานได้ 40%" },
      { id: "NODE-R4", title: "ไม้สักทองทนปลวกและความชื้น", cat: "ธรรมชาติ", color: "#34E89E", desc: "คุณสมบัติน้ำมันในเนื้อไม้สักแท้ ป้องกันแมลงกัดกินนานนับศตวรรษ", takeaway: "เลือกใช้วัสดุธรรมชาติที่มีคุณสมบัติเคมีป้องกันตัวเอง" },
      { id: "NODE-R5", title: "ฝาปะกน ถอดประกอบเคลื่อนย้ายได้", cat: "เทคโนโลยี", color: "#8C6BFF", desc: "แนวคิด Modular Construction โบราณ สามารถยกย้ายเรือนทั้งหลังได้", takeaway: "ระบบโมดูลาร์ช่วยให้การปรับเปลี่ยนพื้นที่ทำได้ง่ายและยั่งยืน" },
      { id: "NODE-R6", title: "เรือนเครื่องสับล้านนาและอยุธยา", cat: "ประวัติศาสตร์", color: "#FF5A1F", desc: "ภูมิปัญญาช่างสิบหมู่ในแต่ละภูมิภาคปรับตามสถาพภูมิอากาศ", takeaway: "ไม่มีคำตอบเดียวในการออกแบบ ต้องปรับตามบริบทพื้นที่" }
    ]
  }
};

let currentBoomSeed = 'med';
let isBoomExpanded = false;

function initDataBooming() {
  const container = document.getElementById('boomingSvg');
  if (!container) return;
  renderBoomSeed(currentBoomSeed);
}

function selectBoomSeed(seedKey) {
  currentBoomSeed = seedKey;
  document.querySelectorAll('.seed-selector-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-seed') === seedKey);
  });
  renderBoomSeed(seedKey);
}

function renderBoomSeed(seedKey) {
  const svg = document.getElementById('boomingSvg');
  if (!svg) return;
  svg.innerHTML = '';
  isBoomExpanded = false;

  const width = svg.clientWidth || 800;
  const height = svg.clientHeight || 560;
  const cx = width / 2;
  const cy = height / 2;

  const seed = BOOMING_SEEDS[seedKey];

  // Update Sidebar Info
  document.getElementById('boomInfoTitle').textContent = seed.title;
  document.getElementById('boomInfoCat').textContent = seed.cat;
  document.getElementById('boomInfoDesc').textContent = seed.desc;
  document.getElementById('boomNodeCount').textContent = "1 โหนด (รอการระเบิดข้อมูล)";

  // Center Node Group
  const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  g.setAttribute("id", "centerBoomNode");
  g.setAttribute("style", "cursor: pointer;");

  // Pulsing lime radar ring
  const pulse = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  pulse.setAttribute("cx", cx);
  pulse.setAttribute("cy", cy);
  pulse.setAttribute("r", "50");
  pulse.setAttribute("fill", "none");
  pulse.setAttribute("stroke", "#D7FF3A");
  pulse.setAttribute("stroke-width", "3");
  pulse.setAttribute("opacity", "0.7");
  pulse.innerHTML = `
    <animate attributeName="r" values="40;68;40" dur="2.2s" repeatCount="indefinite" />
    <animate attributeName="opacity" values="0.8;0.1;0.8" dur="2.2s" repeatCount="indefinite" />
  `;
  g.appendChild(pulse);

  // Center Circle
  const centerCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  centerCircle.setAttribute("cx", cx);
  centerCircle.setAttribute("cy", cy);
  centerCircle.setAttribute("r", "40");
  centerCircle.setAttribute("fill", "#0B0B0F");
  centerCircle.setAttribute("stroke", "#D7FF3A");
  centerCircle.setAttribute("stroke-width", "3.5");
  g.appendChild(centerCircle);

  // Center Label
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("x", cx);
  text.setAttribute("y", cy + 5);
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("fill", "#D7FF3A");
  text.setAttribute("font-size", "12");
  text.setAttribute("font-family", "Chakra Petch");
  text.setAttribute("font-weight", "bold");
  text.textContent = "คลิกเพื่อ BOOM!";
  g.appendChild(text);

  g.onclick = () => triggerRadialBoom(cx, cy, seed);
  svg.appendChild(g);
}

function triggerRadialBoom(cx, cy, seed) {
  if (isBoomExpanded) return;
  isBoomExpanded = true;

  const svg = document.getElementById('boomingSvg');
  const count = seed.children.length;
  const radius = Math.min(svg.clientWidth, svg.clientHeight) * 0.38;

  // Audio / Visual Tick Counter
  let currentCount = 1;
  const counterElem = document.getElementById('boomNodeCount');
  const countInterval = setInterval(() => {
    if (currentCount <= count) {
      counterElem.textContent = `${currentCount + 1} โหนดความเชื่อมโยง`;
      currentCount++;
    } else {
      clearInterval(countInterval);
    }
  }, 45);

  seed.children.forEach((child, idx) => {
    setTimeout(() => {
      const angle = (idx / count) * 2 * Math.PI - Math.PI / 2;
      const tx = cx + Math.cos(angle) * radius;
      const ty = cy + Math.sin(angle) * radius;

      // Line Connector
      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", cx);
      line.setAttribute("y1", cy);
      line.setAttribute("x2", cx);
      line.setAttribute("y2", cy);
      line.setAttribute("stroke", "#CBD0DF");
      line.setAttribute("stroke-width", "2");
      if (idx % 2 === 1) line.setAttribute("stroke-dasharray", "4 4");
      svg.insertBefore(line, document.getElementById('centerBoomNode'));

      // Animate Line
      const animX = document.createElementNS("http://www.w3.org/2000/svg", "animate");
      animX.setAttribute("attributeName", "x2");
      animX.setAttribute("to", tx);
      animX.setAttribute("dur", "0.25s");
      animX.setAttribute("fill", "freeze");
      line.appendChild(animX);

      const animY = document.createElementNS("http://www.w3.org/2000/svg", "animate");
      animY.setAttribute("attributeName", "y2");
      animY.setAttribute("to", ty);
      animY.setAttribute("dur", "0.25s");
      animY.setAttribute("fill", "freeze");
      line.appendChild(animY);

      // Child Node Group
      const nodeG = document.createElementNS("http://www.w3.org/2000/svg", "g");
      nodeG.setAttribute("transform", `translate(${tx}, ${ty}) scale(0)`);
      nodeG.setAttribute("style", "cursor: pointer;");

      nodeG.innerHTML = `
        <circle cx="0" cy="0" r="26" fill="#FFFFFF" stroke="${child.color}" stroke-width="3" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.08))"/>
        <text x="0" y="4" text-anchor="middle" fill="#0B0B0F" font-size="9" font-family="Chakra Petch" font-weight="bold">${child.title.substring(0, 7)}..</text>
        <text x="0" y="38" text-anchor="middle" fill="#5F6274" font-size="8.5" font-family="IBM Plex Mono">${child.cat}</text>
        <animateTransform attributeName="transform" type="scale" from="0" to="1" dur="0.25s" fill="freeze" additive="sum"/>
      `;

      nodeG.onclick = (e) => {
        e.stopPropagation();
        openChildDossier(child);
      };

      svg.appendChild(nodeG);
    }, idx * 45);
  });
}

function openChildDossier(node) {
  document.getElementById('boomInfoTitle').textContent = node.title;
  document.getElementById('boomInfoCat').textContent = node.cat;
  document.getElementById('boomInfoDesc').textContent = node.desc || "โหนดเชื่อมโยงระดับที่ 2";
  if (node.takeaway) {
    document.getElementById('boomInfoTakeaway').innerHTML = `
      <div class="takeaway-tag" style="margin-top: 10px;">
        <strong>💡 Everyday Takeaway:</strong> ${node.takeaway}
      </div>
    `;
  }
}

function resetCurrentBoom() {
  renderBoomSeed(currentBoomSeed);
}

// =============================================================================
// 2. FORCE-DIRECTED INTERACTIVE KNOWLEDGE GRAPH (HALL 03)
// =============================================================================

const KNOWLEDGE_GRAPH_DATA = {
  nodes: [
    // Science (Cyan Circle)
    { id: "S1", title: "สุริยุปราคาหว้ากอ 2411", cat: "science", year: 1868, summary: "การคำนวณตำแหน่งดวงจันทร์บดบังดวงอาทิตย์ล่วงหน้า 2 ปี โดย ร.4", takeaway: "ความแม่นยำทางวิทยาศาสตร์สร้างความเชื่อมั่นระดับสากล", sources: "หอจดหมายเหตุแห่งชาติ", size: 28 },
    { id: "S2", title: "พฤกษศาสตร์สมุนไพรฟ้าทะลายโจร", cat: "science", year: 1872, summary: "สารสกัดแอนโดรกราโฟไลด์และกลไกภูมิคุ้มกัน", takeaway: "บริโภคสมุนไพรตามปริมาณสารสกัดที่กำหนด", sources: "กรมการแพทย์แผนไทย", size: 24 },
    { id: "S3", title: "คณิตศาสตร์และมาตราชั่งตวงวัดโบราณ", cat: "science", year: 1782, summary: "ระบบเทียบเคียงคืบ ศอก วา และบาท เฟื้อง สลึง", takeaway: "หน่วยวัดสัดส่วนมนุษย์ใช้งานง่ายในวิถีชีวิตประจำวัน", sources: "ตำราโบราณ", size: 18 },
    { id: "S4", title: "เคมีวิทยาการหมักดองและจุลินทรีย์", cat: "science", year: 1910, summary: "ภูมิปัญญาถนอมอาหาร ปลาร้า กะปิ น้ำปลา", takeaway: "จุลินทรีย์ Probiotics ช่วยระบบลำไส้และภูมิคุ้มกัน", sources: "สถาบันค้นคว้าอาหาร", size: 20 },
    
    // History (Ember Hexagon)
    { id: "H1", title: "การค้าทางทะเลเมืองท่าสยาม", cat: "history", year: 1685, summary: "ศูนย์กลางการค้านานาชาติเชื่อมมหาสมุทรอินเดียและแปซิฟิก", takeaway: "เปิดกว้างรับความหลากหลายช่วยสร้างโอกาสทางเศรษฐกิจ", sources: "จดหมายเหตุเดอ ลาลูแบร์", size: 26 },
    { id: "H2", title: "จารึกวัดพระเชตุพนฯ (วัดโพธิ์)", cat: "history", year: 1832, summary: "มหาวิทยาลัยเปิดแห่งแรก รวบรวมสรรพวิชาของแผ่นดิน", takeaway: "ความรู้สาธารณะช่วยยกระดับสุขภาวะของคนทุกคน", sources: "ยูเนสโก มรดกความทรงจำแห่งโลก", size: 30 },
    { id: "H3", title: "การปฏิรูปโทรเลขและการสื่อสาร ร.5", cat: "history", year: 1875, summary: "จุดเริ่มต้นเครือข่ายโทรคมนาคมและรหัสมอร์สภาษาไทย", takeaway: "ความเร็วในการส่งข้อมูลคือหัวใจของการบริหารองค์กร", sources: "พิพิธภัณฑ์การสื่อสาร", size: 22 },

    // Technology (Violet Square)
    { id: "T1", title: "วิศวกรรมเรือนไทยไร้ตะปู", cat: "tech", year: 1782, summary: "โครงสร้างไม้เข้าเดือยต้านแรงสั่นสะเทือนและน้ำท่วม", takeaway: "โครงสร้างยืดหยุ่นทนทานต่อภัยพิบัติได้ดีกว่า", sources: "คณะสถาปัตยกรรมศาสตร์", size: 26 },
    { id: "T2", title: "ระบบชลประทานและผังเมืองอยุธยา", cat: "tech", year: 1550, summary: "คูคลองโครงข่ายระบายน้ำและป้อมปราการทางน้ำ", takeaway: "บริหารจัดการน้ำแบบไหลเวียนลดปัญหาน้ำท่วมขัง", sources: "กรมศิลปากร", size: 25 },
    { id: "T3", title: "โลหกรรมสัมฤทธิ์และเทคนิคหล่อพระ", cat: "tech", year: 1400, summary: "สูตรผสมทองแดง ดีบุก ทองคำ และเทคนิคขี้ผึ้งหาย (Lost-Wax)", takeaway: "ความเชี่ยวชาญด้านวัสดุศาสตร์สร้างงานศิลปะคงทนนับพันปี", sources: "สำนักช่างสิบหมู่", size: 20 },
    { id: "T4", title: "คลังความรู้ดิจิทัล & AI Graph", cat: "tech", year: 2026, summary: "โครงสร้าง Semantic Knowledge Graph เพื่อคนไทยทุกคน", takeaway: "เข้าถึงข้อมูลที่ตรวจสอบที่มาได้ใน 3 วินาที", sources: "กระทรวงดิจิทัลฯ", size: 32 },

    // Culture (Amber Triangle)
    { id: "C1", title: "ตำรับยาฤๅษีดัดตน 80 ท่า", cat: "culture", year: 1832, summary: "การบำบัดกล้ามเนื้อและระบบลมปราณในร่างกาย", takeaway: "ฝึกยืดกล้ามเนื้อ 5 นาทีทุกชั่วโมงขณะนั่งทำงาน", sources: "วัดพระเชตุพนวิมลมังคลาราม", size: 26 },
    { id: "C2", title: "ศาสตร์เครื่องเทศและแกงไทย", cat: "culture", year: 1750, summary: "การผสมผสานสมุนไพรฤทธิ์ร้อนเย็นเพื่อสมดุลร่างกาย", takeaway: "กินอาหารเป็นยา ปรับรสตามฤดูกาลเพื่อเสริมภูมิ", sources: "ตำราอาหารสยาม", size: 22 },
    { id: "C3", title: "ประเพณีลงแขกและแรงงานร่วม", cat: "culture", year: 1800, summary: "นวัตกรรมสังคมเพื่อการจัดการทรัพยากรการผลิต", takeaway: "ความร่วมมือในชุมชนช่วยลดต้นทุนและสร้างสัมพันธ์", sources: "มานุษยวิทยาสิรินธร", size: 18 },

    // Nature (Bio Green Diamond)
    { id: "N1", title: "ความหลากหลายป่าดงพญาเย็น", cat: "bio", year: 1960, summary: "มรดกโลกทางธรรมชาติ แหล่งรวมสายพันธุ์พืชถิ่นเดียว", takeaway: "ความหลากหลายทางชีวภาพคือกุญแจค้ำจุนสภาพอากาศ", sources: "กรมอุทยานแห่งชาติ", size: 24 },
    { id: "N2", title: "นิเวศป่าชายเลนและแนวกันคลื่น", cat: "bio", year: 1980, summary: "เกราะป้องกันการกัดเซาะชายฝั่งและอนุบาลสัตว์น้ำ", takeaway: "ป่าชายเลนดักจับคาร์บอน (Blue Carbon) ได้ดีกว่าป่าบก 4 เท่า", sources: "กรมทรัพยากรทางทะเล", size: 22 },

    // Art (Coral Ring)
    { id: "A1", title: "ลายประจำยามและเรขาคณิตไทย", cat: "art", year: 1350, summary: "แม่ลายไทย 4 ทิศ ศูนย์รวมสมดุลและความสง่างาม", takeaway: "ความสมมาตรทางเรขาคณิตสร้างอัตลักษณ์ที่ทรงพลัง", sources: "สำนักช่างสิบหมู่", size: 25 },
    { id: "A2", title: "จิตรกรรมฝาผนังวัดพระแก้ว", cat: "art", year: 1782, summary: "เรื่องเล่ารามเกียรติ์ 178 ห้อง ภาพสะท้อนสังคมวิถีไทย", takeaway: "เรื่องเล่าภาพ (Visual Narrative) สื่อสารข้ามรุ่นได้ดีที่สุด", sources: "สำนักพระราชวัง", size: 24 }
  ],
  links: [
    { source: "S1", target: "H1", type: "influenced" },
    { source: "S1", target: "T4", type: "derived_from" },
    { source: "S2", target: "C1", type: "used_in" },
    { source: "H2", target: "C1", type: "derived_from" },
    { source: "H2", target: "S3", type: "influenced" },
    { source: "T1", target: "H2", type: "used_in" },
    { source: "T2", target: "H1", type: "influenced" },
    { source: "C1", target: "T4", type: "used_in" },
    { source: "A1", target: "T4", type: "derived_from" },
    { source: "A1", target: "T1", type: "used_in" },
    { source: "N1", target: "S2", type: "influenced" },
    { source: "C2", target: "S4", type: "derived_from" },
    { source: "H3", target: "T4", type: "influenced" },
    { source: "A2", target: "A1", type: "derived_from" },
    { source: "N2", target: "T2", type: "influenced" }
  ]
};

let activeCategoryFilter = 'all';
let searchQuery = '';
let currentYearFilter = 2026;
let canvas, ctx;
let simulationNodes = [];
let simulationLinks = [];
let hoveredNode = null;
let selectedNode = null;
let isDragging = false;
let dragNode = null;

const CATEGORY_COLORS = {
  science: "#2EE6FF",
  history: "#FF5A1F",
  tech: "#8C6BFF",
  culture: "#FFC233",
  bio: "#34E89E",
  art: "#FF5FA2"
};

function initKnowledgeGraph() {
  canvas = document.getElementById('graphCanvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Initialize node positions
  const width = canvas.width;
  const height = canvas.height;

  simulationNodes = KNOWLEDGE_GRAPH_DATA.nodes.map((d, i) => {
    const angle = (i / KNOWLEDGE_GRAPH_DATA.nodes.length) * 2 * Math.PI;
    const r = 160 + (i % 3) * 60;
    return {
      ...d,
      x: width / 2 + Math.cos(angle) * r,
      y: height / 2 + Math.sin(angle) * r,
      vx: 0,
      vy: 0
    };
  });

  simulationLinks = KNOWLEDGE_GRAPH_DATA.links.map(l => ({ ...l }));

  // Mouse & Touch events
  canvas.addEventListener('mousemove', handleCanvasMouseMove);
  canvas.addEventListener('mousedown', handleCanvasMouseDown);
  window.addEventListener('mouseup', handleCanvasMouseUp);
  canvas.addEventListener('click', handleCanvasClick);

  // Setup Category Filter Chips
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategoryFilter = chip.getAttribute('data-cat');
    });
  });

  // Search input
  const searchInput = document.getElementById('graphSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
    });
  }

  // Time Slider
  const timeSlider = document.getElementById('graphTimeSlider');
  if (timeSlider) {
    timeSlider.addEventListener('input', (e) => {
      currentYearFilter = parseInt(e.target.value, 10);
      document.getElementById('sliderYearLabel').textContent = `${currentYearFilter} ค.ศ.`;
    });
  }

  // Start Animation Loop
  requestAnimationFrame(renderGraphLoop);
}

function resizeCanvas() {
  if (!canvas) return;
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}

function renderGraphLoop() {
  // Simple force physics
  const kRepel = 800;
  const kAttract = 0.04;
  const centerPull = 0.01;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;

  // Repulsion between nodes
  for (let i = 0; i < simulationNodes.length; i++) {
    const a = simulationNodes[i];
    for (let j = i + 1; j < simulationNodes.length; j++) {
      const b = simulationNodes[j];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      if (dist < 220) {
        const force = kRepel / (dist * dist);
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        if (!a.isPinned) { a.vx -= fx; a.vy -= fy; }
        if (!b.isPinned) { b.vx += fx; b.vy += fy; }
      }
    }
    // Pull to center
    a.vx += (cx - a.x) * centerPull;
    a.vy += (cy - a.y) * centerPull;
  }

  // Attraction along links
  simulationLinks.forEach(l => {
    const source = simulationNodes.find(n => n.id === l.source);
    const target = simulationNodes.find(n => n.id === l.target);
    if (source && target) {
      const dx = target.x - source.x;
      const dy = target.y - source.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const force = (dist - 140) * kAttract;
      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;
      if (!source.isPinned) { source.vx += fx; source.vy += fy; }
      if (!target.isPinned) { target.vx -= fx; target.vy -= fy; }
    }
  });

  // Apply velocities
  simulationNodes.forEach(node => {
    if (!node.isPinned && node !== dragNode) {
      node.x += node.vx * 0.15;
      node.y += node.vy * 0.15;
      node.vx *= 0.85;
      node.vy *= 0.85;
    }
  });

  // Clear Canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw Grid Lines on Canvas
  ctx.strokeStyle = "rgba(0, 0, 0, 0.04)";
  ctx.lineWidth = 1;
  const gridSize = 48;
  for (let x = 0; x < canvas.width; x += gridSize) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
  }
  for (let y = 0; y < canvas.height; y += gridSize) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
  }

  // Draw Links
  simulationLinks.forEach(link => {
    const s = simulationNodes.find(n => n.id === link.source);
    const t = simulationNodes.find(n => n.id === link.target);
    if (!s || !t) return;

    // Filter check
    if (!isNodeVisible(s) || !isNodeVisible(t)) return;

    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(t.x, t.y);

    if (link.type === 'influenced') {
      ctx.setLineDash([]);
      ctx.strokeStyle = "rgba(100, 110, 130, 0.28)";
      ctx.lineWidth = 1.8;
    } else if (link.type === 'derived_from') {
      ctx.setLineDash([5, 4]);
      ctx.strokeStyle = "rgba(140, 107, 255, 0.4)";
      ctx.lineWidth = 1.5;
    } else {
      ctx.setLineDash([2, 3]);
      ctx.strokeStyle = "rgba(255, 90, 31, 0.35)";
      ctx.lineWidth = 1.5;
    }

    if (hoveredNode && (hoveredNode.id === s.id || hoveredNode.id === t.id)) {
      ctx.strokeStyle = "#D7FF3A";
      ctx.lineWidth = 3;
      ctx.setLineDash([]);
    }
    ctx.stroke();
    ctx.setLineDash([]);
  });

  // Draw Nodes
  simulationNodes.forEach(node => {
    if (!isNodeVisible(node)) return;

    const isHovered = hoveredNode && hoveredNode.id === node.id;
    const isSelected = selectedNode && selectedNode.id === node.id;
    const radius = isHovered ? node.size + 4 : node.size;
    const color = CATEGORY_COLORS[node.cat] || "#2EE6FF";

    // Glow ring for selected/hovered
    if (isSelected || isHovered) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, radius + 8, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(215, 255, 58, 0.3)";
      ctx.fill();
    }

    // Node body
    ctx.beginPath();
    ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = isSelected ? "#0B0B0F" : "#FFFFFF";
    ctx.fill();
    ctx.lineWidth = isSelected ? 4 : 2.5;
    ctx.strokeStyle = isSelected ? "#D7FF3A" : color;
    ctx.stroke();

    // Node text
    ctx.font = isHovered ? "bold 11px 'Chakra Petch'" : "10px 'IBM Plex Sans Thai'";
    ctx.fillStyle = isSelected ? "#D7FF3A" : "#12131A";
    ctx.textAlign = "center";
    ctx.fillText(node.title.substring(0, 14), node.x, node.y + radius + 14);
  });

  requestAnimationFrame(renderGraphLoop);
}

function isNodeVisible(node) {
  if (activeCategoryFilter !== 'all' && node.cat !== activeCategoryFilter) {
    return false;
  }
  if (searchQuery && !node.title.toLowerCase().includes(searchQuery)) {
    return false;
  }
  if (node.year > currentYearFilter) {
    return false;
  }
  return true;
}

function handleCanvasMouseMove(e) {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  if (isDragging && dragNode) {
    dragNode.x = mx;
    dragNode.y = my;
    return;
  }

  hoveredNode = null;
  for (let n of simulationNodes) {
    if (!isNodeVisible(n)) continue;
    const dx = mx - n.x;
    const dy = my - n.y;
    if (Math.sqrt(dx * dx + dy * dy) <= n.size + 4) {
      hoveredNode = n;
      break;
    }
  }
  canvas.style.cursor = hoveredNode ? "pointer" : "default";
}

function handleCanvasMouseDown(e) {
  if (hoveredNode) {
    isDragging = true;
    dragNode = hoveredNode;
  }
}

function handleCanvasMouseUp() {
  isDragging = false;
  dragNode = null;
}

function handleCanvasClick(e) {
  if (hoveredNode) {
    selectedNode = hoveredNode;
    showSpecimenDossier(hoveredNode);
  }
}

function showSpecimenDossier(node) {
  const panel = document.getElementById('specimenDossier');
  if (!panel) return;

  document.getElementById('dossierCode').textContent = `GRM-${node.year || '2026'}-${node.cat.toUpperCase().slice(0,3)}-${node.id}`;
  document.getElementById('dossierTitle').textContent = node.title;
  document.getElementById('dossierCat').textContent = `มิติ: ${node.cat.toUpperCase()}`;
  document.getElementById('dossierCat').style.color = CATEGORY_COLORS[node.cat];
  document.getElementById('dossierSummary').textContent = node.summary;
  document.getElementById('dossierTakeaway').textContent = node.takeaway || "ความรู้ที่นำไปปรับใช้ในชีวิตประจำวัน";
  document.getElementById('dossierSources').textContent = node.sources || "ศูนย์มานุษยวิทยาสิรินธร";

  panel.classList.add('open');
}

function closeSpecimenDossier() {
  const panel = document.getElementById('specimenDossier');
  if (panel) panel.classList.remove('open');
  selectedNode = null;
}

// =============================================================================
// 3. EVERYDAY LAB TAKEAWAY ACTIONS (HALL 04)
// =============================================================================

function copyTakeawayText(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = btnElement.textContent;
    btnElement.textContent = "✓ คัดลอกแล้ว!";
    btnElement.style.background = "#D7FF3A";
    btnElement.style.color = "#0B0B0F";
    setTimeout(() => {
      btnElement.textContent = originalText;
      btnElement.style.background = "";
      btnElement.style.color = "";
    }, 1800);
  });
}

function shareKnowledgeCard(title, takeaway) {
  alert(`📢 สั่งสร้าง Knowledge Card ขนาด 1080×1350 px สำหรับแชร์ในโซเชียล:\n\nหัวข้อ: ${title}\nสาระสำคัญ: ${takeaway}\n\nระบบพร้อมส่งออกเป็นภาพ PNG ความละเอียดสูงตามมาตรฐานแบรนด์ GRURU!`);
}

// =============================================================================
// 4. INITIALIZATION ON DOM READY
// =============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initDataBooming();
  initKnowledgeGraph();

  // Seed Selector clicks
  document.querySelectorAll('.seed-selector-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectBoomSeed(btn.getAttribute('data-seed'));
    });
  });

  console.log("⚡ GRURU MUSEUM Engine initialized. System Online.");
});
