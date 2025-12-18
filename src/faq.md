---
layout: base.njk
title: FAQ
description: Frequently Asked Questions about the Federated Social Media Pilot
---

<section class="hero" style="padding-bottom: var(--spacing-xl);">
  <h1>Frequently Asked Questions</h1>
  <p class="hero-subtitle">
    Clarifying the scope and goals of our decentralized social media pilot.
  </p>
</section>

<div class="faq-container">
  
  <div class="card">
    <div class="card-header">
      <span class="card-icon">🎯</span>
      <h3>Project Scope & Objectives</h3>
    </div>
    
    <details class="faq-item" open>
      <summary><strong>What is the scope of this project?</strong></summary>
      <div class="faq-content">
        <p>
          We are experimenting with the <strong>Fediverse</strong> and potentially <strong>Bluesky</strong> (ActivityPub and ATProtocol compatible applications) to explore decentralized communication for government.
        </p>
        <p>
          <strong>Important Clarification:</strong> We are NOT looking to host accounts for the average citizen or general public on our internal services.
        </p>
      </div>
    </details>

    <details class="faq-item">
        <summary><strong>Who will be able to post on these services?</strong></summary>
        <div class="faq-content">
          <p>
            The services will only be "postable" (i.e., allow content creation) by authorized personnel. Access to post will be restricted to specific individuals using standard access control methods like <strong>Entra ID</strong> or <strong>LDAP</strong>, managed by the County of Los Angeles and Public Works.
          </p>
          <p>
            The general public interacts with these services by <em>following</em> our accounts from their own servers (e.g., mastodon.social, bluesky, etc.), not by creating accounts on our infrastructure.
          </p>
        </div>
      </details>

    <details class="faq-item">
      <summary><strong>What are the long-term goals?</strong></summary>
      <div class="faq-content">
        <p>
          A long-term goal is to establish a model where this kind of service could be run by the County's own <strong>Internal Services Department (ISD)</strong>. 
        </p>
        <p>
            This would allow other agencies within the Los Angeles County umbrella to easily adopt the platform and publish updates from the <code>lacounty.gov</code> domain or other appropriate verified hostnames, ensuring trust and authenticity.
        </p>
      </div>
    </details>
  </div>

</div>

<style>
  .faq-item {
    padding: var(--spacing-md) 0;
    border-bottom: 1px solid var(--color-border);
  }
  .faq-item:last-child {
    border-bottom: none;
  }
  .faq-item summary {
    cursor: pointer;
    font-size: 1.1em;
    list-style: none; /* Hide default triangle */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .faq-item summary::-webkit-details-marker {
    display: none;
  }
  .faq-item summary::after {
    content: '+';
    font-weight: bold;
    margin-left: 10px;
  }
  .faq-item[open] summary::after {
    content: '-';
  }
  .faq-content {
    margin-top: var(--spacing-sm);
    color: var(--color-text-muted);
    line-height: 1.6;
  }
</style>
