---
title: Ubuntu Installation
description: Installation guidelines for the Ubuntu operating system
date: 2025-06-30
draft: false
slug: /blog/ubuntu-installation
category: bracu
tags:
  - OS
  - Ubuntu
---

# Getting Started with Ubuntu: Dual Boot vs Virtual Machine (VMWare/VirtualBox)

Ubuntu is one of the most popular Linux distributions—clean, powerful, and perfect for developers, students, or anyone exploring open-source. If you're a Windows user looking to get into Ubuntu, you’ve got two main paths: Dual Booting or using a Virtual Machine (VM) via tools like VMWare or VirtualBox. Each has its pros and use cases.

## Option 1: Dual Boot

Dual booting is the process of bootstrapping two operating systems on the same hardware, with the option of choosing the desired one at startup. Dual booting is the lengthier approach, and is more suitable if you:

- want the most responsive Ubuntu experience
- plan to use Ubuntu as a daily driver
- are running a computer with relatively older specifications
- want the entire Ubuntu flavor

**ADVISORY**: Dual booting comes with the inherent risk of messing up your computer's existing bootloader, partitions, and sometimes entire operating systems. You should not proceed with dual booting unless you absolutely know what you're doing/are comfortable taking a few risks.

### Step 1: Create a bootable USB device

1. Download Rufus: [Rufus](https://rufus.ie/en/) is a tool that burns disc images (ISO files) to removable partitions. You can either download the portable version or the installer to install permamently to your Windows OS.

2. Download Ubuntu: The ISO file of [Ubuntu](https://ubuntu.com/download/desktop) should be downloaded from their website. You can safely choose the latest version available in their website.

3. Use Rufus to burn the Ubuntu ISO to a USB drive. The steps here are pretty straightforward.

### Step 2: Partition your existing hard drive

1. In Windows, open Disk Management.

2. Shrink your Windows partition and create ~30+ GB of unallocated space. You can follow this [video](https://www.youtube.com/watch?v=tJiakVgAtn4&ab_channel=JoshuaCasper).

### Step 3: Boot into your USB device

It is not feasible to add a tutorial here unfortunately. In simple terms, you need to be able to load whatever you wrote in your USB device in Step 1 when your computer starts. By default, all computers will load from the main storage (HDD, SSD). Your motherboard will have options to *override* this setting, either by changing the **boot priority order** or by manually selecting the boot device. You should refer to a video corresponding to your particular motherboard model.

### Step 4: Install Ubuntu

1. Steps here should be lengthy, but straightforward. Choose “Install Ubuntu alongside Windows Boot Manager” when prompted. This will create the option to choose your desired operating system each time the computer is powered on.

2. Assign the unallocated space for Ubuntu during the install wizard.

### Step 5: Restart

Remove the USB device when prompted and restart your computer. If you confirm a bootloader screen with options to load **both** Windows and Ubuntu, you are good to go. If any one is missing, something went wrong, and diagnosis should be carefully performed.

## Option 2: Virtual Machine

A virtual machine is an isolated computer that runs inside your Windows operating system. In this machine you can run any operating system of your choice. It is best for Quick access, sandboxed environments, testing. You can run Ubuntu inside your existing OS using virtualization. You should use this if:

- you have a lot of computer resources (>  8GB RAM) 
- you do not want to go through the painstaking dual boot process

It is advised to use Virtualbox to create the virtual machine.

### Step 1: Enable Virtualization from the BIOS

Inside your motherboard's BIOS settings, there should be an option to enable virtualization.

### Step 2: Install VirtualBox

This acts as our virtual machine manager. Download and install [VirtualBox](https://www.virtualbox.org/wiki/Downloads).

### Step 3: Download Ubuntu

The ISO file of [Ubuntu](https://ubuntu.com/download/desktop) should be downloaded from their website. You can safely choose the latest version available in their website.

### Step 4: Install Ubuntu on a Virtual Machine

1. Create a New VM: 

```
Name: Ubuntu

Type: Linux, Version: Ubuntu (64-bit)

```
2. Assign Resources:
```
Memory: At least 2048 MB

Disk: Create a virtual hard disk (20 GB+ recommended)
```
3. Mount the ISO: In VM settings → Storage → Choose the Ubuntu ISO under "Optical Drive".

4. Boot & Install Ubuntu: Start the VM, follow the install prompts like a normal OS install.

5. Install Guest Additions: Improves display, clipboard sharing, drag-and-drop, etc. In the running VM: Devices → Insert Guest Additions CD Image.
