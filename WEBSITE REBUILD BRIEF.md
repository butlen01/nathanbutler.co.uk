# nathanbutler.co.uk Executive Rebuild Brief

Implementation spec for Claude Code. Work through this in order. Everything below is decided; do not redesign, do not restyle, do not invent facts.

---

## 0. How to work through this

1. Read this whole file before changing anything.
2. Confirm the actual filenames in the repo before editing. Filenames referenced here are from a site map export and may differ by a hyphen.
3. Work priority by priority (P0 first). Commit after each priority block with a clear message.
4. Where copy is given below, use it **verbatim**. It is final.
5. Where a `TODO(NB)` marker is specified, insert an HTML comment and **leave the section out of the live page**. Never publish placeholder text, never invent a figure, never use Lorem ipsum.
6. After each priority block, run the verification checks in section 13.

---

## 1. Context

Personal executive website for Nathan Butler, positioning him for **Commercial Director, Sales Director, Chief Operating Officer and Country Manager** roles. Audience is recruiters, executive search firms and hiring panels.

The site content is strong but reads as a specialist who pulled clever levers rather than an executive who ran a business. This brief fixes framing, adds missing evidence, and closes credibility gaps.

**Known files** (confirm before editing):

```
index.html
track-record-leadership.html
client-case-studies.html
about.html
contact.html
404.html
story-bdm-structure.html
story-pay-redesign.html
story-margin-control.html
story-scotland-turnaround.html
story-cost-to-profit.html
story-trusted-relationships.html
story-governance-cadence.html
story-sanctuary.html
story-victoria.html
story-tobacco-warehouse.html
story-cbre.html
story-barnes-village.html
story-wv-living.html
story-octopus-real-estate.html
story-countrywide-financial-services.html
story-research-marketing-profit.html
```

---

## 2. Global rules (non-negotiable)

**Visual design is locked.** The existing CSS is the single source of truth. Do not change the palette, typography, spacing scale, layout system or component styling. Palette for reference only: navy `#1E3A6E` (primary), Data Tint `#9DB0D4` (charts), Accent-2 `#8CA0C0` (on-dark eyebrows). New pages reuse existing templates exactly.

**No spaced em-dashes.** Nathan considers these an obvious AI tell. Every U+2014 character on the site must go. Do not blind-replace with a hyphen. Review each one and choose:
- joining two independent clauses → colon, or split into two sentences
- parenthetical aside → commas, or restructure
- range or compound → close-set hyphen where genuinely correct

Report the count found and the count fixed.

**First person, always.** The site is Nathan's own account. Use `I`, never `we`. `story-scotland-turnaround.html` currently slips into `we` in at least four places. Sweep every page.

**No invented facts.** If a figure, date, client name or claim is not in this brief or already on the site, do not add it. Flag it as `TODO(NB)` instead.

**Accessibility floor.** Keep visible keyboard focus, respect `prefers-reduced-motion`, maintain heading hierarchy, keep alt text on every image.

---

## 3. P0: Critical fixes (do these first)

### 3.1 Impact tiles render as zero

**The single most urgent item on the site.**

On `index.html` the impact tiles display `0×`, `0%`, `c.0 Units Won` and `0 People` whenever the count-up animation does not execute: printing, save-to-PDF, script-blocking corporate networks, ATS parsers, AI screening tools.

Fix: write the **real final value as static text in the HTML**, then animate on top of it rather than animating up from a hardcoded zero.

Pattern:

```html
<span class="stat-value" data-countup-to="4">4</span><span class="stat-suffix">×</span>
```

JS reads `data-countup-to`, and only if `matchMedia('(prefers-reduced-motion: reduce)')` does **not** match, resets to 0 and animates. If JS never runs, the real number is already on the page.

Apply the same pattern to every animated number sitewide, including the story pages and the hub stat strips.

### 3.2 Number consistency

| Value | Correct | Fix |
|---|---|---|
| Agency office network | **250** | `index.html` says `c.265`. Change to 250 everywhere. |
| Direct reports | **9** | `index.html` says `8 Direct Reports`. Change to 9. |
| BSc Building Surveying | **2004 – 2008** | `about.html` says `2004 – 2007`. Change to 2008. |
| Tenure | **14 years** | Use consistently where tenure is stated. |

### 3.3 Wrong section heading

`index.html`, Selected Work section.

- Locate: `Six Challenges. Proof in Two Forms.`
- Replace with: `The Systems, and the Accounts They Delivered For.`
- Add sub-line beneath: `How the business was rebuilt from the inside, and what that was worth to the clients and customers who depended on it.`

(The old heading said six above seven track record tiles and nine case studies.)

### 3.4 Commercial confidentiality edits

These publish a former employer's and named clients' commercial terms. Keep the mechanism, remove the specifics.

| File | Locate (unique phrase) | Action |
|---|---|---|
| `story-tobacco-warehouse.html` | `£7,500 in fees per unit` | Replace the fee-per-unit clause with: `a fee scale that made it the largest single mandate the business had ever landed` |
| `story-victoria.html` and `story-scotland-turnaround.html` | `breakeven` | Keep the strategy, remove the client name from that specific sentence. Use: `Taken at breakeven in phase one as a deliberate market-position decision, with terms renegotiated once that position was proven.` |
| `story-countrywide-financial-services.html` | `accrued a share of the incremental income` | Replace with: `Structured so the division shared in the income the change created.` |
| `story-cost-to-profit.html` | `10% levy` and `£15k` | Keep the £15k research figure. Generalise the levy to: `a modest levy on every piece of material produced on a developer's behalf` |
| `story-scotland-turnaround.html` | `culture of blame` | Replace the whole paragraph. Full replacement copy in section 5.4 below. |

---

## 4. P1: Home page (`index.html`)

### 4.1 Eyebrow above the hero headline

- Locate: `SENIOR COMMERCIAL & OPERATIONAL LEADER`
- Replace with: `COMMERCIAL DIRECTOR · SALES DIRECTOR · CHIEF OPERATING OFFICER · COUNTRY MANAGER`

### 4.2 Hero headline

**Unchanged.** Leave `I take commercial complexity and turn it into growth that holds under pressure.` exactly as it is.

### 4.3 Hero sub-headline

- Locate: `Over a decade leading multi-division P&Ls`
- Replace the entire paragraph with:

> Fourteen years of multi-division P&L ownership: five divisions and a national affordable housing operation, c.80 people, nine direct reports, a 250-office delivery network and a £1.1bn development pipeline. In that time I grew divisional revenue more than fourfold, held a 23% return on sale while the industry average fell from 15% to 10%, and returned a business unit earmarked for closure to sustained profit. The structures behind each of those are still running.

### 4.4 New availability line

Insert directly beneath the two hero buttons, as a small-text line in the existing muted caption style:

> Open to Commercial Director, Sales Director, Chief Operating Officer and Country Manager roles. Based in Chester, working nationally. [Download the full CV](#) 

Link target: see section 11.1.

### 4.5 Impact tiles

Six tiles. Replace existing tile content entirely. Static values in HTML per 3.1.

| # | Headline | Label | Supporting line |
|---|---|---|---|
| 01 | `×4` | Divisional revenue growth | Revenue grown from c.£1.9m to c.£8.2m over seven years, held through a contracting market rather than riding a rising one. |
| 02 | `23% ROS` | Return on sale, sustained | Held for three years while industry-average returns were squeezed from 15% to 10%. The gap widened rather than narrowed. |
| 03 | `£1.1bn GDV` | Pipeline under contract | A 4,000-unit residential development portfolio across national, regional, institutional and public sector clients. |
| 04 | `100%` | National account retention | Every national account held through every tender cycle, with exclusive rights secured on two. |
| 05 | `c.2,500 units` | Won personally | Worth c.£12.5m of contribution, with new-business wins up 35% year on year across the division. |
| 06 | `5 divisions` | Plus a national affordable housing operation | c.80 people, nine direct reports, and delivery through c.250 offices outside my direct reporting line. |

### 4.6 Add the FCMI credential near the hero

`CMgr FCMI` currently appears only in a credentials strip two thirds down `about.html`. Surface it on the home page as a small credential line beneath the availability line:

> Chartered Manager, Fellow of the Chartered Management Institute · BSc Building Surveying · PRINCE2 and MSP Practitioner

### 4.7 Principles section

Three changes.

**(a) Reorder.** New order:

1. Build engines, not heroics *(currently 06)*
2. Diagnose, then intervene *(currently 01)*
3. Keep testing the commercial case *(currently 09)*
4. **Protect the customer outcome and the commercial one follows** *(new, copy below)*
5. Deliver through influence *(currently 02, rewritten below)*
6. Make the complex simple *(currently 05)*
7. Decisive, and fair with it *(currently 03)*
8. Grow ownership, not dependence *(currently 04)*
9. Coach in the detail, then feed it back to everyone *(merged 07 + 08, copy below)*

Renumber the `01`–`09` markers to match the new order.

**(b) Rewrite principle 05, Deliver through influence:**

> Most of what I have delivered ran through people who did not report to me: 250 agency offices, a client's own regional sales directors, finance, legal, HR and a group centre. Real seniority is not the authority to command, it is the standing to align people who could reasonably say no. I make the case in the terms each function is measured on rather than in mine, which is what turns a fragmented matrix into a business that moves as one.

**(c) Merge 07 and 08 into one, headed `Coach in the detail, then feed it back to everyone`:**

> I develop people through the work itself, one conversation at a time, because that is where habits form rather than on an away day. Then every deal, won or lost, gets captured and pushed back into how the whole team works, so the same mistake is not repeated in five different offices. A lesson kept to one person is a lesson wasted.

**(d) New principle at position 04, headed `Protect the customer outcome and the commercial one follows`:**

> A sale that completes badly costs more than the one that never happened: cancellations, remediation, a client's own satisfaction score, and the reference that decides the next tender. I design the buyer journey and the delivery standard with the same discipline as the pricing, because in a repeat business they are the same number.

---

## 5. P2: Track Record hub and the seven existing story pages

### 5.1 `track-record-leadership.html`: page intro

- Locate: `Seven commercial and operational systems`
- Replace the whole paragraph with:

> Ten commercial and operational systems, each rebuilt from the ground up inside a business of five divisions, c.80 people and a 250-office delivery network. Every one begins with the result, then shows the structure, the decisions and the people that produced it. The pattern matters more than any single figure. These are repeatable methods that outlasted my involvement rather than outcomes that depended on it, and none of them are specific to property.

### 5.2 `track-record-leadership.html`: stat strip

Replace with five items:

`×4 divisional revenue` | `23% ROS sustained` | `£1.1bn GDV pipeline` | `100% account retention` | `c.80 people, 250 offices`

### 5.3 `track-record-leadership.html`: commercial model block

- Locate: `Win the client mandate through consultative B2B advice`
- Replace the whole block with:

> "Win the client mandate through consultative B2B advice on go-to-market and pricing, then own the B2C execution that delivers it, and be measured on both." That is the operating model behind every result on this page. It applies to any business that has to win a client, deliver what it sold, and be judged on how the end customer experienced it. The sector changes. The mechanics do not.

### 5.4 `track-record-leadership.html`: group the ten proof points

Introduce three group headings, in the existing eyebrow style, dividing the tile list:

| Group heading | Contains |
|---|---|
| `GROWTH` | 01 BDM Structure, 02 Pay Redesign, 03 Trusted Relationships |
| `OPERATING DISCIPLINE` | 04 Margin, 05 Turnaround, 06 Cost to Profit, 07 Governance, 08 Owning the Number *(new)* |
| `CLIENT AND CUSTOMER` | 09 Formal Procurement *(new)*, 10 Customer Outcomes *(new)* |

Renumber all tiles `01`–`10` in this order. Update every anchor ID, every carousel deep-link on `index.html`, and every cross-link between story pages so nothing breaks.

### 5.5 Story page copy replacements

For each, locate by the unique phrase and replace the whole block.

---

**`story-bdm-structure.html`: Situation**

Locate: `Business development managers were aligned purely by geography.`

> Forty business development managers were aligned purely by geography, and the model had a hole in it. National and regional housebuilders operating across several patches heard different pitches, different fees and materially different service levels from the same company, which cost credibility on exactly the accounts worth most. Underneath that sat a bigger gap: my BDMs and the forty estate agency regions that would ultimately sell the stock had no formal alignment and no shared reporting line. Growth depended on how entrepreneurial an individual happened to be that quarter, which meant it could not be forecast, could not be protected when someone left, and could not be scaled. For a business setting a budget, that is the real cost. Not lost revenue, but revenue nobody can responsibly commit to.

**`story-bdm-structure.html`: Result**

Locate: `A pipeline built on structure and reciprocity`

> c.£1.1bn of GDV under contract across a 4,000-unit pipeline, built through forty designed relationships rather than forty individual efforts. The commercial effect was not only volume. Pipeline became forecastable for the first time, which changed what the division could credibly commit to at budget, and the cost of winning fell because an agency network of c.250 offices started generating leads it had never previously bothered to pass on. It kept producing after I stopped holding it together personally, which is the only real test of whether it was ever a system. For the client, the change was just as visible: a national housebuilder now dealt with one commercial position and one service standard wherever they operated, rather than negotiating separately with four parts of the same company.

**`story-bdm-structure.html`: NEW Approach sub-section**

Add as a new sub-heading `Built the Layer, Rather Than Hired It`, after the existing `A Land Team, Not a Land Grab` section:

> Regional sales managers on the largest accounts were recruited from inside the business and grown into the role, each running a number of sites and reporting directly to me. That was deliberate. Internal promotion gave me people who already understood the operating model, cut ramp time to near zero, and created a visible progression route that made the roles underneath easier to fill and easier to keep. Building a management layer is slower than stretching one person across dozens of live sites. It is also the only version that survives the person who built it.

Also add, in the Approach section, the phrases `territory design`, `coverage model` and `indirect channel` where they naturally fit. These are the terms a Sales Director shortlist screens for and the site currently never uses them.

---

**`story-pay-redesign.html`: Situation**

Locate: `Variable pay was tied to the revenue running through an account`

> For years, variable pay was tied to the revenue running through an account rather than the outcome of it. That sounds reasonable until you follow the incentive. Once someone won a mandate, their income depended on that revenue continuing to flow through them personally, so when the moment came to move delivery to whoever could actually run it best, they had every reason to resist. Sincerely, not obstructively: the pay structure gave them every reason to believe they could do it better themselves, and every reason not to find out otherwise. The cost never showed up as a failure to win business. It showed up as growth capped at whatever a handful of people could personally hold onto, a ceiling built into the pay model rather than into the market or the team.

**`story-pay-redesign.html`: Result**

Locate: `The behaviour changed before the revenue did.`

> Divisional revenue grew more than fourfold over seven years, c.£1.9m to c.£8.2m, and held through a cyclical market rather than riding a rising one. Three things matter commercially about how that was done. It was cost-neutral, funded entirely from the existing variable pay envelope with no increase to the cost of sale. It was modelled before it was trusted, stress-tested across dozens of deal scenarios so the business knew rather than hoped it could fund the structure at any mix of deal size and timing. And it never paid out for a mandate that was never going to sell, because half the reward stayed tied to the home actually completing. The behaviour changed before the revenue did. Mandates started moving to whoever could deliver them within days rather than being held for quarters, which shortened time to revenue on every new win and meant the person running a client's account was the person best placed to run it. The structure is still in use, largely unchanged, years later.

Use the phrase `financial modelling` in the `Modelled Before It Was Trusted` sub-section.

---

**`story-margin-control.html`: Result**

Locate: `A sustained 23% return on sale, while industry-average returns`

> A sustained 23% return on sale, held for three years while industry-average returns were squeezed from 15% to 10% in the same market. The gap widened rather than narrowed. None of it came from selling more into a market that was not there to sell into, and none of it came from cutting the delivery standard, which is the usual place margin gets found and much the most expensive place to find it. Client-reported satisfaction held across the same period, which is precisely what protected the fee level at the next tender round: a discount conceded in a downturn is very hard to win back, and a service level conceded is harder still.

**`story-margin-control.html`: extend the risk-transfer lever**

Locate: `A lower fee line that transfers real risk off the balance sheet`

> A lower fee line that transfers real risk off the balance sheet is a better deal than a higher one that does not. That is a contracting judgement rather than a pricing one, and it is the same judgement in any business that sells a service delivered by people: where the cost sits, where the risk sits, and whether the two are in the same place.

---

**`story-scotland-turnaround.html`: Situation**

Locate: `The unit I inherited was loss-making and earmarked for closure.`

> I inherited a standalone Scottish business unit that was loss-making and formally earmarked for closure. It was not short of revenue. The cost carried against that revenue had grown disproportionate to it: contracts with client commitments, press spend and staff wages baked in regardless of how a site was actually performing, and a management layer that had grown heavy enough to make decisions without contributing to them. In every practical sense it was a country manager's problem in miniature. A geographically separate unit with its own cost base, its own client relationships and its own reputation in a market that knew it was struggling, a group centre that had run out of patience, and an open question about whether it had a future at all.

**`story-scotland-turnaround.html`: REPLACE the restructuring paragraph entirely**

Locate: `the people who left were the ones who were unproductive`

Replace the whole `A Management Layer That Wasn't Managing` body copy with:

> Restructuring at that scale is a process, not a decision. I mapped the roles the business genuinely needed against what good looked like, matched existing people into that structure wherever there was a direct fit, and ran proper consultation where there was not. Some people left. Handled badly, that is where a turnaround stalls, because the people who stay are watching how the people who go are treated. Handled properly, and with the reasoning explained rather than announced, it is what allows the team that remains to believe the change is about the business rather than about them. That was never headcount removed to hit a number, and it was never presented as one.

**`story-scotland-turnaround.html`: Result**

Locate: `The unit became one of the division's stronger performers`

> The unit moved from loss to become one of the division's stronger performers, on a cost base that finally matched its revenue and a pipeline built on anchor instructions rather than hope. Three things made it durable commercially: the rate card rose and held, the contract base was profitable contract by contract rather than only in aggregate, and the fixed cost of a site presence was matched to what each individual site could actually support. Reputationally, landmark wins such as the Victoria in Glasgow proved the recovery to the market rather than only to an internal board, which is what stopped competitors treating the unit as an easy account to take. For clients, a supplier they had every reason to worry about became one they could plan around. The recovery earned promotion to Divisional Director.

Also use the phrase `cost to serve` in the `Rebuilding the Cost Base Site by Site` section.

---

**`story-cost-to-profit.html`: Result**

Locate: `Marketing and market research became self-funding income streams`

> Marketing and market research stopped being cost lines and became income lines, which changed what happened to them at the next budget round: neither was ever seriously threatened with cuts again. Four of five divisions ranked in the group's top four of thirty-six for cross-sell, proof the model worked well beyond the division where it was first tried. Financial services alone added an average of £560 per sale at close to zero marginal cost, which drops almost entirely to margin because the mortgage sale rides on a house sale that is already happening. That is one of the cleanest routes to a higher return on sale there is, and cleaner than any amount of extra volume. It also improved the customer's position rather than exploiting it. A new-build, off-plan buyer needs advice built around exchange and completion timescales that a standard high street process is not shaped for, and bringing that capability in-house meant the advice was designed around the transaction the buyer was actually making.

---

**`story-trusted-relationships.html`: Result**

Locate: `c.2,500 units won personally, worth c.£12.5m of contribution`

> c.2,500 units won personally, worth c.£12.5m of contribution, with new-business wins up 35% year on year and every national account retained across the period, exclusive rights secured on two. The commercial point is not the win rate, it is the retention. In a business where every account is re-tendered, revenue you keep is worth materially more than revenue you win, because it carries no cost of sale and it compounds across cycles. The wins outlasted the deals that started them. And the clients stayed for a reason that shows up in their numbers rather than mine: on the largest account, the measure I was held to was customer satisfaction scored by their own buyers and reported straight to their own board, not a sales figure reported to mine.

---

**`story-governance-cadence.html`: Result**

Locate: `A £1.4m year-on-year rise in new-business wins in the first full quarter`

> A £1.4m year-on-year rise in new-business wins in the first full quarter, with a single source of truth running the business in real time, from a site's weekend footfall to a business development manager's claimed mandate. The wider commercial value was forecasting. For the first time the division could commit to a number at budget and defend it monthly with evidence rather than assertion, which is what changes the conversation with a group centre from explanation to management. It also made coaching specific: I could see exactly where an individual's activity was and was not converting, across dispersed teams I could not physically be with, and address the gap rather than guess at it. I owned the build end to end, from procurement and contract negotiation through design, training and ongoing use, so there was one accountable owner rather than a handover chain. The same cadence still drives coaching today, which is what turns a system into a habit rather than a one-off intervention.

Use the phrase `operating model` in the Approach section.

---

## 6. P3: Three new proof point pages

Create three new story pages. **Clone the exact structure, markup and classes of `story-pay-redesign.html`.** Same header, same hero block, same big-stat band, same Situation / Approach / Result structure, same back-link and footer CTA.

Add a matching tile to `track-record-leadership.html` and a matching carousel card to `index.html` for each (carousel copy in section 10).

### 6.1 `story-board-discipline.html`

- Anchor on hub: `#board-discipline`
- Eyebrow: `GOVERNANCE`
- Title: `Owning the Number in Front of the Board`
- Hero stat: `5 Divisions` / label: `one P&L, one forecast, one accountable owner`
- Hero intro: `Everything else on this site sits underneath one thing: I owned the budget. This is what that actually involved, past the org chart.`

**Situation**

> Everything else on this page sits underneath one thing: I owned the budget. Five divisions, a national affordable housing operation, c.80 people and nine direct reports, with the annual budget, the rolling forecast and the long-term growth plan all built by me and defended upward to the group.

> That is a materially different job from running a function well. A function is judged on its own output. A P&L is judged on whether the number you committed to in month one is the number you deliver in month twelve, and on whether the group can plan the rest of the business around you in the meantime. Every lever described elsewhere on this site existed because that number had to be met in a market that spent three of those years contracting.

**Approach** (four sub-headed blocks)

`Built the Budget From the Bottom Up`
> From pipeline, conversion rates and an actual cost base rather than last year plus a percentage, so the number was defensible line by line before it was ever committed. A budget you cannot explain at line level is a number you will spend the year apologising for.

`No Surprises Upward`
> A monthly cadence of forecast, variance and action, with the variance explained before anyone had to ask about it. No surprises upward is not a courtesy. It is the thing that buys a business unit the freedom to run itself.

`Accountability the Full Depth of the Structure`
> Nine direct reports held to their own numbers on the same cadence, with the same evidence base, so ownership did not stop at my level and reappear as a surprise at theirs.

`Working the Matrix Deliberately`
> Finance, legal, marketing, HR and operations all sat outside my reporting line and every one of them was a dependency. I made the case for what I needed in the terms each function was measured on rather than in mine, which is the only version of that conversation that works twice. I also kept the three-year growth plan separate from the twelve-month budget: one told the group where the division was going, the other told them what to bank. Confusing the two is how businesses over-promise and under-invest at the same time.

**Result**

> Consecutive years of revenue and volume growth, delivered against budget and forecast rather than around them, through a market that contracted for three of those years. The specific credibility that buys is the freedom to be left alone. A group centre that trusts a forecast stops managing the detail, which is what allowed five dispersed divisions to run at genuine pace rather than at the speed of a monthly review.

> That is the same relationship a country manager has with a foreign parent, and the same one a chief operating officer has with a board. The mechanics do not change with the org chart.

### 6.2 `story-procurement.html`

- Anchor on hub: `#procurement`
- Eyebrow: `FORMAL PROCUREMENT`
- Title: `Winning the Contract Before the Relationship Can Help You`
- Hero stat: `Formal Tender` / label: `public and institutional procurement, won on evaluation rather than access`
- Hero intro: `A twenty-year relationship earns you an invitation. Then you are scored on paper by evaluators who have never met you and are not permitted to care that they might have.`

**Situation**

> Relationships win a great deal of business, but a significant share of what I was responsible for could not be won that way. Housing associations, local authorities, institutional funds and government-backed programmes buy through formal procurement: prescribed processes, published evaluation criteria, scored written submissions and, increasingly, weighted social value.

> In that world, access counts for nothing. A twenty-year relationship earns you the right to be invited, and then you are scored on paper, against everyone else, by evaluators who may never have met you and are not permitted to be influenced by the fact that they might have. It is a different discipline from a pitch and it rewards a different set of skills.

**Approach**

`Led the Submissions Personally`
> As company lead on the business's formal bid submissions, including government tenders, I owned the commercial position, the pricing model and the quality response rather than delegating the number and reviewing the words afterwards.

`Wrote to the Criteria, Not to the Story`
> Submissions were built against the published evaluation weightings rather than against what we most wanted to say. A tender is not a pitch, the marker is not the audience, and points are only available where the scheme says they are available.

`Made Operational Depth the Differentiator`
> The understanding built up on a live account, down to viewing numbers, staff attendance and sale trajectory on individual sites, is exactly the evidence a competitor cannot assemble inside the six weeks a bid window allows. On the largest account that depth compounded every cycle, to the point where competitors were functionally excluded. Not through any exclusivity clause, but because years of accumulated detail cannot be matched with weeks of preparation.

`Priced for Position Where That Was the Right Call`
> Including taking a landmark instruction at breakeven in its first phase as a deliberate decision to establish market leadership, then renegotiating terms once the position was proven. Market position first, margin second, and only where the position was genuinely worth buying.

`Bid Governance, Not Bid Enthusiasm`
> A clear qualify-or-decline decision before anyone wrote a word, so effort went into bids the business could win and deliver rather than into every opportunity that arrived.

**Result**

> Substantial contract wins with housing associations, private developers, local authorities and institutional funds, and the largest account in the group retained in full through every tender cycle of the relationship. The commercial insight is that a well-run account is a compounding asset in procurement: each cycle the submission got stronger because the operational understanding underneath it got deeper.

> Procurement discipline also travels further than almost anything else on this site. Bid governance, evaluation-led writing, pricing strategy and social value are the same disciplines whether the buyer is a housing association, an NHS trust, a local authority, a framework body or a corporate procurement function. It is the part of my experience that is least specific to property and most specific to how large organisations actually buy.

### 6.3 `story-customer-outcomes.html`

- Anchor on hub: `#customer-outcomes`
- Eyebrow: `CUSTOMER OUTCOMES`
- Title: `The Customer Was the Product`
- Hero stat: `Board-Reported` / label: `client-scored customer satisfaction, the measure I was held to on the largest account`
- Hero intro: `On the largest account in the group, my delivery was measured by the client's own buyers and reported to the client's own board. That changes the job permanently.`

**Situation**

> On the largest account in the group, I was not primarily measured on sales. Sanctuary surveyed its own buyers, the people who had actually bought and moved into a home, and reported those scores directly to its own board. A weak month on one site in one region did not just cost a sale. It appeared in a report that a client's board read every quarter, against a client whose name was on the door.

> That reframes the job permanently, and it should. Once the customer's experience is the number, delivery quality stops being an operational nicety and becomes the commercial mechanism. It is what retains the account, protects the fee and wins the next tender. In a business where every relationship is re-tendered, the customer's experience is not a cost of doing business. It is the asset.

**Approach**

`Trained to the Client's Standard, Not the Contract's Minimum`
> I learned Sanctuary's own reporting standards well enough to anticipate them rather than respond to them, and trained my site teams to the level their board expected rather than the level our contract required. If a client's board wanted to see satisfaction trending a certain way, I needed to know that before one of their regional directors had to raise it with me.

`Designed the Buyer Journey Where None Existed`
> On a council-owned development company, that meant translating planning conditions, Section 106 obligations and grant funding requirements into plain answers to ordinary questions, and building the touchpoints from reservation to completion from nothing. A council operates on process, sign-off and public accountability, correctly so. A buyer wants to know when they can view, what their mortgage offer needs to look like, and when they get their keys. Somebody has to be fluent in both.

`Built Compliance That Protects the Customer, Not Just the Client`
> On a shared ownership portfolio funded through Homes England's Capital Funding Guide, that meant affordability assessments testing whether a buyer could sustain ownership long term rather than merely afford the purchase, income caps applied correctly, priority honoured for first-time buyers and armed forces personnel, and an audit trail that proved every one of those before a regulator ever asked for it. Get that wrong and the exposure is not a difficult conversation with a buyer. It is a compliance finding against a publicly funded programme, and a household in a home they cannot sustain.

`Held the Standard Where I Had No Authority to Enforce It`
> Across an agency network of c.250 offices outside my reporting line, by setting the model and the KPIs those networks would own rather than issuing instructions they had no reason to follow, and by making performance visible enough that meeting the standard became the easier choice.

`Sequenced Product and Price Around the Buyer`
> Releases, specification and phasing built around what the buyer was actually purchasing, so price points were earned through product and positioning rather than pushed onto a market that would eventually push back through cancellations and incentives.

`Visited Every Site Personally`
> Not as diligence theatre. Understanding the micro-economics of a location, footfall patterns, local competition and the specific buyer profile a scheme would attract, meant a problem could be assessed and planned for before it occurred rather than discovered afterwards. That makes the whole relationship a better journey for the customer, not just a better-managed one.

**Result**

> Every national account retained. The account measured on customer satisfaction stayed the largest in the group by volume throughout, and the position strengthened at every tender because the client's own board could see the scores.

> On an institutional fund portfolio, a 150-flat scheme sold out entirely off-plan and a 500-unit tower sold 45% off-plan with the remainder inside roughly twelve months of completion. That is the cleanest available evidence that pricing and specification were right for the buyer rather than optimistic for the client, because no incentive scramble was needed at completion and no unsold stock sat on a balance sheet waiting.

> On a council-backed developer, six sites sold across shared ownership, bulk investor sale and open market, with every buyer moving through the same underlying operation without ever feeling they were dealing with a council.

> The commercial argument is simple and it holds in any repeat-purchase business. A sale that completes badly costs more than the one that never happened, and the customer's experience is the asset that decides whether the client comes back.

---

## 7. P4: Client Case Studies

### 7.1 `client-case-studies.html`: page intro

Locate: `Winning a mandate is the easy part to talk about.`

> Winning a mandate is the easy part to talk about. This is what happened next: for the funds, housing associations, councils and developers who depended on the work actually being delivered, and for the people who bought and moved into the homes at the end of it. Anyone can point to a win. The test of a commercial leader is what the client had afterwards, whether the customer was better off, and whether the account was still there at the next tender.

### 7.2 `client-case-studies.html`: stat strip

Change `100% account retention` to `100% account retention, zero accounts lost`. Leave the other three.

### 7.3 Add two labelled outcome lines to every card and story

**Structural change.** On each of the nine case study cards on `client-case-studies.html`, and at the foot of each corresponding story page, replace the single `RESULT` block with two labelled blocks in the existing label style:

```
COMMERCIAL OUTCOME
[copy]

CUSTOMER OUTCOME
[copy]
```

Copy for all nine:

| Case | COMMERCIAL OUTCOME | CUSTOMER OUTCOME |
|---|---|---|
| Sanctuary | Largest account in the group by volume, retained in full through every tender cycle, with the position strengthening each round rather than being defended each round. c.2,500 units won across the relationship. | Satisfaction scored by Sanctuary's own buyers and reported to their own board. I was held to that measure rather than to a sales number, and trained my site teams to the standard their board expected rather than the minimum the contract required. |
| The Victoria, Glasgow | The group's pitch win of the year, taken from Savills, run at breakeven in phase one as a deliberate market-position decision and renegotiated once that position was proven. It anchored the recovery of a unit that had been earmarked for closure. | 135 affordable homes in phase one of a 413-home masterplan that retained the former hospital's Nightingale wards, on a site the community had a century of attachment to. The pitch led with what the redevelopment would mean for Langside before it mentioned a commercial number. |
| The Tobacco Warehouse | The single largest mandate the business has ever landed. 500-plus apartments, plus attachment sales income and the publicity value of being named on the city's most recognisable address. | Two entirely different buyer journeys designed to run side by side without either undermining the other: overseas investors buying a landmark asset, and domestic, mortgage-dependent buyers relying on government schemes to make an off-plan heritage purchase achievable. |
| Abbey Place, CBRE | 650-plus units delivered across eight sites. Every scheme performed against the model it was underwritten on, which is the only result that matters to an institutional fund: not one good sale, but a portfolio that behaves exactly as promised. | The end product was shared ownership and affordable rent. Specification and pricing were set against what those buyers could actually sustain rather than what the fund's model hoped they could, which is why Bletchley sold out entirely before a single flat was finished. |
| Barnes Village | £1.35m of fee value on 156 homes, at price points South Manchester had not seen on a comparable heritage conversion, achieved through release sequencing rather than a single pricing decision. | A finished product held to a genuinely immaculate standard, from show-apartment fit-out through to the last townhouse, because the building's history was the product being sold and buyers were paying precisely for that. |
| WV Living | Six sites sold across three routes to market: shared ownership, bulk sale to private rented sector investors and the open market. Bulk sale gave the council committed volume before a single owner-occupier walked a plot, de-risking the wider programme. | Every buyer, whether a first-time shared owner or a family buying outright, moved through the same operation without ever feeling they were dealing with a council. Planning conditions, Section 106 obligations and grant rules translated into plain answers to ordinary questions. |
| Octopus Real Estate | Account retained on the same terms as the group's most established housing clients, on a national portfolio built from a blank page and run from the North West. | Affordability assessed against whether a buyer could sustain ownership long term rather than merely afford the purchase. Income caps applied correctly, priority honoured for first-time buyers and armed forces personnel, and an audit trail that proved it before Homes England ever asked. |
| Countrywide Financial Services | £560 average added per sale at close to zero marginal cost, on income that had been leaving the group entirely. An internal revenue share rather than a one-off favour, which is what made it durable. | Mortgage and protection advice built around the specific rhythm of a new-build, off-plan purchase rather than a standard high street process, and offered at the point the buyer was already committing rather than chased afterwards as a referral. |
| Research & Marketing | Two cost centres turned into income lines, which protected both from the next budget round rather than making them a target for it. Four of five divisions in the group's top four of thirty-six for cross-sell. | Developers got research they valued enough to pay for and marketing built to a consistent standard, which raised the floor on how every scheme was presented to the buyers who would ultimately see it. |

### 7.4 Label Octopus and WV Living as build-from-nothing

Add the clause `built from a blank page, with no existing function to inherit` to the hero intro of both `story-octopus-real-estate.html` and `story-wv-living.html`. These are market-entry credentials and are currently unlabelled.

### 7.5 Missing case card images

Two cards still have no image: Countrywide Financial Services and Research & Marketing. Either source appropriate imagery or apply the existing no-image card treatment cleanly. Do not leave a broken or empty image container.

---

## 8. P5: New case study: affordable housing

Create `story-affordable-housing.html`, cloned from an existing client case study page. Anchor `#affordable-housing` on `client-case-studies.html`. Add a card and a carousel entry.

- Eyebrow: `AFFORDABLE HOUSING`
- Hero stat: `760 Homes` / label: `delivered in the final year`
- Title: `Bringing a National Affordable Housing Operation Under Divisional Leadership`

**Context** (publish this)

> Affordable housing ran as a separate national team, selling shared ownership and affordable tenures to a buyer profile, on a funding model, and against a regulatory framework that had almost nothing in common with open market new build. Different clients: registered providers, local authorities and institutional funds rather than housebuilders. Different route to market: formal procurement rather than relationship. Different buyer: often first-time, always assessed against eligibility and affordability rules before they are permitted to buy at all. Bringing it under divisional leadership meant absorbing a specialist operation into a general one without flattening the specialism that made it work.

**Commercial outcome** (publish this)

> 760 units delivered in the final year, added into the divisional P&L, with a client base of registered providers, local authorities and institutional funds that tenders through formal procurement and buys on delivery evidence rather than relationship. It diversified the division's revenue away from open market cyclicality at exactly the point the open market was contracting, which is worth as much as the volume itself.

**Customer outcome** (publish this)

> A buyer group that is by definition financially stretched, frequently first-time, and assessed against eligibility and affordability rules before they can buy at all. Getting that right is not a service question. It is whether somebody can sustain the home they have just bought, and whether public money produced the outcome it was allocated for.

**Approach section: DO NOT PUBLISH YET.**

Insert this and leave the section out of the rendered page:

```html
<!-- TODO(NB): Approach section pending Nathan's factual input.
     Needed: team size, revenue contribution, principal clients,
     and whether the operation was inherited working or was fixed.
     If it was fixed, this becomes a second turnaround story and
     the page should be restructured accordingly.
     Do not draft placeholder content. -->
```

---

## 9. P6: About and Contact

### 9.1 `about.html`: page intro

Locate: `I started as a school-leaver trainee negotiator`

> I started as a school-leaver trainee negotiator, studying for a construction diploma and then a building surveying degree alongside full-time work. Every role since has followed the same shape: take on something underperforming and leave it stronger than I found it. A branch, then a region, then a business unit, then a division, then five of them. The scale changed. The job did not.

### 9.2 `about.html`: NEW section, `What I Am Looking For`

Place immediately after the page intro, before `THE JOURNEY`. Use the existing eyebrow plus heading pattern.

Eyebrow: `WHAT I AM LOOKING FOR`

> A commercial or operational leadership role with a genuine remit: a P&L, a team, and the authority to change how the business works rather than only how hard it works. Commercial Director, Sales Director, Chief Operating Officer or Country Manager.

> Sector matters less to me than whether the commercial fundamentals are recognisable: a client to win, a promise to deliver, a customer at the end of it, and a number to hold. I have spent my career in property and I would be glad to stay in it, but nothing on this site depends on the sector. Based in Chester, working nationally.

### 9.3 `about.html`: credentials strip

Existing strip: change `PRINCE2` to `PRINCE2 Practitioner` and `MSP` to `MSP Practitioner`.

Add a **second strip** immediately below, same card styling, eyebrow `WHERE I HAVE OPERATED`:

- `Formal public procurement and government tender`
- `Homes England Capital Funding Guide`
- `Regulated financial services referral`
- `Local authority and registered provider governance`
- `Institutional fund reporting`

### 9.4 `about.html`: Inclusivitee CIC

Locate: `I volunteer at Inclusivitee`

> I volunteer at Inclusivitee, a community interest company supporting children and young people with special educational needs and disabilities. I deliver youth work sessions and I write the grant applications that fund the organisation, which means I have sat on both sides of a funding bid: the one asking, and the one accountable for what the money produced.

### 9.5 `contact.html`: page intro

Locate: `If you are hiring for a senior commercial, sales, operations`

> If you are hiring for a Commercial Director, Sales Director, Chief Operating Officer, Country Manager or divisional managing director, I would like to hear from you. That includes roles where the sector is not obviously mine. I am open to conversations across property, housing, construction, industrial, services, leisure and beyond, on the straightforward basis that the commercial fundamentals travel: a client to win, a promise to deliver, a customer at the end of it, and a number to hold. Email is fastest. I read every message myself and usually reply within a day or two.

### 9.6 `contact.html`: role chips

Replace the three existing chips with five:

`SALES DIRECTOR` · `COMMERCIAL DIRECTOR` · `CHIEF OPERATING OFFICER` · `COUNTRY MANAGER` · `DIVISIONAL MANAGING DIRECTOR`

### 9.7 `contact.html`: add a detail row

Add beneath `LOCATION`:

`AVAILABILITY` → `Full clean UK driving licence. Nationally mobile.`

---

## 10. P7: Carousel and tile card copy

Replace every carousel card body on `index.html`. Cards currently show a truncated Situation followed by a truncated Result and read as cut-off articles. Each should now be a scene plus a consequence, then stop.

### Track Record

| # | Card | Copy |
|---|---|---|
| 01 | A BDM Structure Built to Scale | Forty business development managers, forty agency regions outside my control, and no reason for the two to help each other. Pairing them one to one built a £1.1bn pipeline that kept producing after I stopped holding it together. |
| 02 | Redesigning Pay to Redesign Growth | The pay model rewarded holding onto an account, so people held on, sincerely believing they could run it better. Redesigning it cost the business nothing and grew revenue fourfold. |
| 03 | Trusted Enough to Stay in the Room | Seven years pursuing one building, handing over strategic advice for free with no signed instruction. Competitors circled and dropped away. The instruction was worth the wait. |
| 04 | Holding Margin While the Market Squeezed It | New-build completions fell 10.2% in three years and industry returns fell from 15% to 10%. Four levers, pulled at once, held mine at 23%. |
| 05 | Rescuing a Business Earmarked for Closure | A standalone Scottish unit, loss-making and marked for closure. Raising fees when volume was already thin looked like the wrong call. It was the only one worth making. |
| 06 | Turning Cost Centres Into Profit Centres | Marketing, research and financial services: three lines that only ever took money out, in a year when every cost was under scrutiny. All three ended up paying for themselves. |
| 07 | An Extra 1%, Every Day | Nobody knew how many buyers had walked a site over a weekend, or whether a claimed mandate was real. Replacing trust with evidence added £1.4m in a single quarter. |
| 08 | Owning the Number in Front of the Board | Five divisions, c.80 people and one number to hold in front of the group, in a market contracting for three straight years. This is what owning a P&L actually involves, past the org chart. |
| 09 | Winning the Contract Before the Relationship Can Help | A twenty-year relationship earns you an invitation. Then you are scored on paper by evaluators who have never met you. This is how the paper got stronger every cycle. |
| 10 | The Customer Was the Product | On the largest account in the group, my delivery was measured by the client's own buyers and reported to the client's own board. That changes the job permanently. |

### Client Case Studies

| # | Card | Copy |
|---|---|---|
| 01 | Sanctuary | The largest account in the group by volume, run across sites the length of the UK, by a client whose own sales directors did not report to me. Retained in full, every tender cycle. |
| 02 | The Victoria, Glasgow | A business unit earmarked for closure needed proof it deserved a client's most significant site. Savills was the safe choice. 413 homes in Glasgow is what made the recovery real. |
| 03 | The Tobacco Warehouse | The world's largest brick-built building, beside Everton's new stadium. Seven years of giving advice away for free, and repeated trips to Dublin, to win 500 apartments. |
| 04 | Abbey Place, CBRE | An institutional fund whose real product was not housing but yield. Closer to a fractional COO than a sales mandate: 650 units across eight sites, every scheme performing to its model. |
| 05 | Barnes Village, Cheadle | A London developer bought one of South Manchester's most recognisable landmarks, then found they could not run a premium brand from two hundred miles away. |
| 06 | WV Living | A council building genuinely needed homes, and one question nobody could answer: could a council-led company sell like a commercial developer? Six sites, three routes to market. |
| 07 | Octopus Real Estate | A utility company deploying capital into housing, bound overnight by rules it had never operated under. The sales operation and the compliance framework, built from a blank page. |
| 08 | Countrywide Financial Services | The group already owned a financial services business. The new-homes division sent almost all its work outside instead. Winning it back was an internal negotiation, not a client one. |
| 09 | Research & Marketing | Two functions that had never been asked to earn anything, in a year when every cost line was a target. Both ended up too profitable to cut. |
| 10 | Affordable Housing | A national affordable housing team, a different client base, a different regulator and a different buyer entirely. 760 homes in the final year, absorbed without losing what made it work. |

---

## 11. P8: Site assets

### 11.1 CV download

Add `/assets/Nathan-Butler-CV.pdf` and link from:
- the home page availability line (section 4.4)
- the Contact page detail card
- the footer, under `SITE`

If the PDF is not yet in the repo, insert `<!-- TODO(NB): CV PDF pending upload -->` and hide the link rather than shipping a 404.

### 11.2 Endorsements section

Add a new section to `index.html`, between the impact tiles and the principles. Eyebrow `ENDORSEMENTS`, three quote cards in the existing card style, each with quote, name and role.

**No content available yet.** Build the markup, then:

```html
<!-- TODO(NB): 3 endorsements required.
     Suggested sources: a former MD or group director, a client
     (Sanctuary, CBRE or Octopus contact), and a former direct report.
     Do not publish this section until real quotes with real
     attributions exist. No placeholder quotes. -->
```

Keep the section commented out of the render until populated.

### 11.3 Metadata and social preview

Every page needs a unique `<title>` and `<meta name="description">`, plus Open Graph and Twitter card tags:

```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="https://nathanbutler.co.uk/assets/og-image.jpg">
<meta property="og:url" content="...">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```

Currently the URL renders as a bare link when shared in LinkedIn or Teams, which is how most recruiters will pass it on.

Add a `favicon`, a `sitemap.xml`, and a `robots.txt`.

### 11.4 Print stylesheet

Recruiters print and save to PDF. Add `@media print`:
- all numbers render at their real values (already handled by 3.1)
- hide nav, footer CTA blocks and the carousel controls
- expand carousels so all cards print
- ensure the hero image does not push content to page two
- black text on white, link URLs printed after link text

Test print output on `index.html`, `track-record-leadership.html` and `client-case-studies.html`.

### 11.5 Contact form

Add a simple form alongside the mailto link. A `mailto:` fails silently on plenty of corporate machines. Name, email, organisation, message. Use a static-site-compatible handler (Netlify Forms is already available given the deploy target).

### 11.6 Analytics

Add privacy-respecting analytics (Plausible or similar) so page-level engagement is visible.

---

## 12. TODO(NB) register

Do not resolve these. Insert the comment, keep the section unpublished, and list them in the final report.

| ID | Location | Blocked on |
|---|---|---|
| 1 | `story-affordable-housing.html` Approach | Team size, revenue contribution, principal clients, inherited vs fixed |
| 2 | `index.html` endorsements | Three real quotes with attributions |
| 3 | `/assets/Nathan-Butler-CV.pdf` | CV PDF upload |
| 4 | Health and safety accountability | Whether Nathan held it. If yes, add to `story-board-discipline.html` Approach and the About regulatory strip. If no, leave off entirely. |
| 5 | Sales conversion metrics | Named pipeline stages and a conversion or win-rate improvement figure for `story-governance-cadence.html` |
| 6 | Partner/framework card | Whether to add a combined card covering Legal & General Affordable Homes, Balfour Beatty, Places for People, MUSE, Sefton and Harcourt. These appear as logos on the home page with no supporting content. |

---

## 13. Verification checklist

Run before reporting complete.

**Content**
- [ ] Zero occurrences of U+2014 sitewide. Report found/fixed counts.
- [ ] Zero occurrences of `we`, `our` or `us` referring to Nathan's own actions.
- [ ] `250` used for office network everywhere. No `265`.
- [ ] `nine direct reports` / `9` everywhere. No `8`.
- [ ] BSc dates read `2004 – 2008`.
- [ ] No `Lorem ipsum` or placeholder text anywhere in the repo.
- [ ] Every figure on the site traces to this brief or to existing content. Nothing invented.

**Rendering**
- [ ] With JavaScript disabled, every number on `index.html` shows its real value.
- [ ] Print preview of all five primary pages shows real numbers and no clipped content.
- [ ] All 20+ carousel cards display the new copy.
- [ ] All tiles renumbered `01`–`10` in the new group order.

**Links**
- [ ] Every anchor ID resolves, including the four new ones.
- [ ] Every carousel deep-link resolves after renumbering.
- [ ] Every story-to-story cross-link still resolves.
- [ ] No 404s. Crawl the site and report.
- [ ] Four new pages linked from their hub, their carousel, and carrying a working back-link.

**Quality**
- [ ] Keyboard focus visible on every interactive element.
- [ ] `prefers-reduced-motion` respected by the count-up animation.
- [ ] Mobile viewport tested at 375px and 414px.
- [ ] Heading hierarchy valid on new pages.
- [ ] Alt text on every image.

**Report back with:** em-dash count, files changed, pages created, TODO(NB) items outstanding, and anything in this brief that did not match the actual repo state.
